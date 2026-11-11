
const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputProduto = document.querySelector("#produto");
const inputQuantidade = document.querySelector("#quantidade");
const resultado = document.querySelector("#resultado");

const listaOrcamentos = document.querySelector("#listaOrcamentos");
const totalOrcamentos = document.querySelector("#totalOrcamentos");
const somaOrcamentos = document.querySelector("#somaOrcamentos");

const produtos = {
  notebook: {
    nome: "Notebook IdeaPad 3",
    preco: 2799.00
  },
  mouse: {
    nome: "Mouse Gamer RGB",
    preco: 129.90
  },
  teclado: {
    nome: "Teclado Mecânico",
    preco: 249.90
  },
  headset: {
    nome: "Headset com Microfone",
    preco: 189.90
  },
  ssd: {
    nome: "SSD 480 GB",
    preco: 530.00
  },
  memoria: {
    nome: "Memória RAM 8 GB",
    preco: 329.90
  },
  roteador: {
    nome: "Roteador Wi-Fi",
    preco: 219.90
  },
  mochila: {
    nome: "Mochila para Notebook",
    preco: 159.90
  },
  monitor: {
    nome: 'Monitor Full HD 24"',
    preco: 799.90
  },
  webcam: {
    nome: "Webcam Full HD",
    preco: 219.90
  },
  gabinete: {
    nome: "Gabinete Gamer",
    preco: 349.90
  },
  "caixa-som": {
    nome: "Caixa de Som USB",
    preco: 99.90
  },
  desktop: {
    nome: "Desktop para Escritório",
    preco: 2199.90
  },
  "placa-video": {
    nome: "Placa de Vídeo RTX 3060 6GB",
    preco: 1899.90
  },
  impressora: {
    nome: "Impressora Multifuncional",
    preco: 649.90
  },
  controle: {
    nome: "Controle para PC",
    preco: 189.90
  }
};

let orcamentos = [];
let proximoId = 1;

const formatarReal = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor);
};

function mostrarMensagem(mensagem, tipo) {
  resultado.classList.remove(
    "d-none",
    "alert-success",
    "alert-warning",
    "alert-danger"
  );

  resultado.textContent = mensagem;
  resultado.classList.add(tipo);
}

function atualizarHistorico() {
  listaOrcamentos.innerHTML = "";

  totalOrcamentos.textContent =
    `${orcamentos.length} registro(s)`;

  const soma = orcamentos.reduce((total, orcamento) => {
    return total + orcamento.total;
  }, 0);

  somaOrcamentos.textContent = formatarReal(soma);

  if (orcamentos.length === 0) {
    const vazio = document.createElement("p");
    vazio.className = "empty-history";
    vazio.textContent = "Nenhum orçamento cadastrado ainda.";

    listaOrcamentos.appendChild(vazio);
    return;
  }

  orcamentos.forEach((orcamento) => {
    const item = document.createElement("article");
    item.className = "history-item";

    const informacoes = document.createElement("div");
    informacoes.className = "history-info";

    const cliente = document.createElement("h3");
    cliente.textContent = orcamento.nome;

    const produto = document.createElement("p");
    produto.textContent = `Produto: ${orcamento.produto}`;

    const quantidade = document.createElement("p");
    quantidade.textContent = `Quantidade: ${orcamento.quantidade}`;

    const unitario = document.createElement("p");
    unitario.textContent =
      `Preço unitário: ${formatarReal(orcamento.preco)}`;

    const total = document.createElement("strong");
    total.className = "history-price";
    total.textContent = `Total: ${formatarReal(orcamento.total)}`;

    informacoes.append(
      cliente,
      produto,
      quantidade,
      unitario,
      total
    );

    const botaoExcluir = document.createElement("button");
    botaoExcluir.type = "button";
    botaoExcluir.className = "btn btn-outline-danger btn-sm";
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.dataset.id = orcamento.id;
    botaoExcluir.setAttribute(
      "aria-label",
      `Excluir orçamento de ${orcamento.nome}`
    );

    item.append(informacoes, botaoExcluir);
    listaOrcamentos.appendChild(item);
  });
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const produto = produtos[inputProduto.value];

  const quantidadeDigitada = inputQuantidade.value.trim();
  const quantidade = Number(quantidadeDigitada);

  if (nome === "") {
    mostrarMensagem(
      "Informe o nome do cliente.",
      "alert-warning"
    );
    return;
  }

  if (!produto) {
    mostrarMensagem(
      "Selecione um produto válido.",
      "alert-warning"
    );
    return;
  }

  if (
    quantidadeDigitada === "" ||
    !Number.isInteger(quantidade) ||
    quantidade <= 0
  ) {
    mostrarMensagem(
      "Informe uma quantidade inteira maior que zero.",
      "alert-warning"
    );
    return;
  }

  const total = produto.preco * quantidade;

  const novoOrcamento = {
    id: proximoId++,
    nome: nome,
    produto: produto.nome,
    quantidade: quantidade,
    preco: produto.preco,
    total: total
  };

  orcamentos.push(novoOrcamento);

  mostrarMensagem(
    `Orçamento cadastrado com sucesso! Valor total: ${formatarReal(total)}`,
    "alert-success"
  );

  atualizarHistorico();
  formulario.reset();
});

listaOrcamentos.addEventListener("click", (event) => {
  const botao = event.target.closest("button[data-id]");

  if (!botao) {
    return;
  }

  const id = Number(botao.dataset.id);

  orcamentos = orcamentos.filter((orcamento) => {
    return orcamento.id !== id;
  });

  atualizarHistorico();
});
