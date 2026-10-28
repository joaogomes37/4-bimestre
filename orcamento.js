const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputProduto = document.querySelector("#produto");
const inputQuantidade = document.querySelector("#quantidade");
const resultado = document.querySelector("#resultado");

const produtos = {
  notebook: { nome: "Notebook IdeaPad 3", preco: 2799 },
  mouse: { nome: "Mouse Gamer RGB", preco: 129.9 },
  teclado: { nome: "Teclado Mecânico", preco: 249.9 },
  headset: { nome: "Headset com Microfone", preco: 189.9 },
  ssd: { nome: "SSD 480 GB", preco: 530.00 },
  memoria: { nome: "Memória RAM 8 GB", preco: 139.9 },
  roteador: { nome: "Roteador Wi-Fi", preco: 219.9 },
  mochila: { nome: "Mochila para Notebook", preco: 159.9 },
};

const formatarReal = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const produto = produtos[inputProduto.value];
  const quantidadeDigitada = inputQuantidade.value.trim();
  const quantidade = Number(quantidadeDigitada);

  resultado.classList.remove(
    "d-none",
    "alert-success",
    "alert-warning",
    "alert-danger"
  );

  if (!nome) {
    resultado.textContent = "Informe o nome do cliente.";
    resultado.classList.add("alert-warning");
    return;
  }

  if (!produto) {
    resultado.textContent = "Selecione um produto válido.";
    resultado.classList.add("alert-warning");
    return;
  }

  if (
    quantidadeDigitada === "" ||
    !Number.isInteger(quantidade) ||
    quantidade <= 0
  ) {
    resultado.textContent = "Informe uma quantidade inteira maior que zero.";
    resultado.classList.add("alert-warning");
    return;
  }

  const total = produto.preco * quantidade;
  resultado.textContent =
    `Cliente: ${nome} | Produto: ${produto.nome} | ` +
    `Quantidade: ${quantidade} | Preço unitário: ${formatarReal(produto.preco)} | ` +
    `Valor total: ${formatarReal(total)}`;
  resultado.classList.add("alert-success");
});