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
  memoria: { nome: "Memória RAM 8 GB", preco: 329.9 },
  roteador: { nome: "Roteador Wi-Fi", preco: 219.9 },
  mochila: { nome: "Mochila para Notebook", preco: 159.9 },
  monitor: { nome: 'Monitor Full HD 24"', preco: 799.9 },
  webcam: { nome: "Webcam Full HD", preco: 219.9 },
  gabinete: { nome: "Gabinete Gamer", preco: 349.9 },
  "caixa-som": { nome: "Caixa de Som USB", preco: 99.9 },
  desktop: { nome: "Desktop para Escritório", preco: 2199.9 },
  "placa-video": { nome: "Placa de Vídeo RTX 3060 6GB", preco: 1899.9 },
  impressora: { nome: "Impressora Multifuncional", preco: 649.9 },
  controle: { nome: "Controle para PC", preco: 189.9 },
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