
const produtosPadrao = {
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

function carregarProdutos() {
  try {
    const dadosSalvos = localStorage.getItem("cyber-produtos");

    if (dadosSalvos !== null) {
      const produtosSalvos = JSON.parse(dadosSalvos);

      if (Array.isArray(produtosSalvos)) {
        return Object.fromEntries(
          produtosSalvos
            .filter((produto) => {
              return produto &&
                typeof produto.nome === "string" &&
                Number.isFinite(Number(produto.preco)) &&
                Number(produto.preco) > 0;
            })
            .map((produto, indice) => [
              `catalogo-${indice}`,
              { nome: produto.nome, preco: Number(produto.preco) }
            ])
        );
      }
    }
  } catch (erro) {
    console.warn("Não foi possível carregar o catálogo salvo.", erro);
  }

  return produtosPadrao;
}

const produtos = carregarProdutos();

const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputProduto = document.querySelector("#produto");
const inputQuantidade = document.querySelector("#quantidade");
const resultado = document.querySelector("#resultado");
const botaoAdicionar = document.querySelector("#adicionarProduto");
const carrinhoResumo = document.querySelector("#carrinhoResumo");
const listaCarrinho = document.querySelector("#listaCarrinho");
const contadorCarrinho = document.querySelector("#contadorCarrinho");
const subtotalCarrinho = document.querySelector("#subtotalCarrinho");

const listaOrcamentos = document.querySelector("#listaOrcamentos");
const totalOrcamentos = document.querySelector("#totalOrcamentos");
const somaOrcamentos = document.querySelector("#somaOrcamentos");

let orcamentos = [];
let proximoId = 1;
let itensSelecionados = [];

const formatarReal = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor);
};

Object.entries(produtos).forEach(([chave, produto]) => {
  const opcao = document.createElement("option");
  opcao.value = chave;
  opcao.textContent = `${produto.nome} — ${formatarReal(produto.preco)}`;
  inputProduto.appendChild(opcao);
});

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

function atualizarCarrinho() {
  const totalCarrinho = itensSelecionados.reduce((total, item) => {
    return total + item.total;
  }, 0);

  contadorCarrinho.textContent = `${itensSelecionados.length} item(ns)`;
  subtotalCarrinho.textContent = formatarReal(totalCarrinho);

  listaCarrinho.innerHTML = "";

  if (itensSelecionados.length === 0) {
    carrinhoResumo.classList.add("d-none");
    return;
  }

  carrinhoResumo.classList.remove("d-none");

  itensSelecionados.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    const info = document.createElement("div");
    info.className = "cart-item-info";

    const nome = document.createElement("strong");
    nome.textContent = `${item.produto} × ${item.quantidade}`;

    const valor = document.createElement("span");
    valor.textContent = `${formatarReal(item.preco)} cada`;

    info.append(nome, valor);

    const subtotal = document.createElement("span");
    subtotal.textContent = formatarReal(item.total);

    const remover = document.createElement("button");
    remover.type = "button";
    remover.className = "btn btn-link btn-sm text-danger p-0";
    remover.textContent = "Remover";
    remover.dataset.id = item.id;

    cartItem.append(info, subtotal, remover);
    listaCarrinho.appendChild(cartItem);
  });
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

    const itens = orcamento.itens.map((itemOrcamento) => {
      const detalhe = document.createElement("p");
      detalhe.textContent =
        `${itemOrcamento.produto}: ${itemOrcamento.quantidade} × ${formatarReal(itemOrcamento.preco)}`;
      return detalhe;
    });

    const total = document.createElement("strong");
    total.className = "history-price";
    total.textContent = `Total: ${formatarReal(orcamento.total)}`;

    informacoes.append(cliente, ...itens, total);

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

function validarItemSelecionado() {
  const nome = inputNome.value.trim();
  const produto = produtos[inputProduto.value];
  const quantidadeDigitada = inputQuantidade.value.trim();
  const quantidade = Number(quantidadeDigitada);

  if (nome === "") {
    mostrarMensagem("Informe o nome do cliente.", "alert-warning");
    return null;
  }

  if (!produto) {
    mostrarMensagem(
      "Selecione um produto válido.",
      "alert-warning"
    );
    return null;
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
    return null;
  }

  return {
    id: Date.now() + Math.random(),
    produto: produto.nome,
    quantidade: quantidade,
    preco: produto.preco,
    total: produto.preco * quantidade
  };
}

botaoAdicionar.addEventListener("click", () => {
  const nomeCliente = inputNome.value.trim();
  const item = validarItemSelecionado();

  if (!item) {
    return;
  }

  itensSelecionados.push(item);
  atualizarCarrinho();
  mostrarMensagem(
    `Produto adicionado ao orçamento: ${item.produto} (${item.quantidade} item(ns)).`,
    "alert-success"
  );

  formulario.reset();
  inputNome.value = nomeCliente;
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = inputNome.value.trim();

  if (nome === "") {
    mostrarMensagem("Informe o nome do cliente.", "alert-warning");
    return;
  }

  if (itensSelecionados.length === 0) {
    mostrarMensagem(
      "Adicione pelo menos um produto antes de finalizar o orçamento.",
      "alert-warning"
    );
    return;
  }

  const total = itensSelecionados.reduce((soma, item) => {
    return soma + item.total;
  }, 0);

  const novoOrcamento = {
    id: proximoId++,
    nome: nome,
    itens: [...itensSelecionados],
    total: total
  };

  orcamentos.push(novoOrcamento);
  mostrarMensagem(
    `Orçamento finalizado com sucesso! Valor total: ${formatarReal(total)}`,
    "alert-success"
  );

  itensSelecionados = [];
  atualizarCarrinho();
  atualizarHistorico();
  formulario.reset();
});

listaCarrinho.addEventListener("click", (event) => {
  const botao = event.target.closest("button[data-id]");

  if (!botao) {
    return;
  }

  const id = Number(botao.dataset.id);

  itensSelecionados = itensSelecionados.filter((item) => {
    return item.id !== id;
  });

  atualizarCarrinho();
  if (itensSelecionados.length === 0) {
    mostrarMensagem("Todos os itens foram removidos do orçamento atual.", "alert-warning");
  }
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

atualizarHistorico();
