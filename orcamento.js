const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputServico = document.querySelector("#servico");
const inputQuantidade = document.querySelector("#quantidade");
const resultado = document.querySelector("#resultado");

const servicos = {
  formatacao: { nome: "Formatação", preco: 120 },
  limpeza: { nome: "Limpeza", preco: 80 },
  instalacao: { nome: "Instalação", preco: 50 },
};

const formatarReal = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const servico = servicos[inputServico.value];
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

  if (!servico) {
    resultado.textContent = "Selecione um serviço válido.";
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

  const total = servico.preco * quantidade;
  resultado.textContent =
    `Cliente: ${nome} | Serviço: ${servico.nome} | ` +
    `Quantidade: ${quantidade} | Preço unitário: ${formatarReal(servico.preco)} | ` +
    `Valor total: ${formatarReal(total)}`;
  resultado.classList.add("alert-success");
});