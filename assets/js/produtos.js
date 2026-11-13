
const produtosPadrao = [
  {
    nome: "Notebook IdeaPad 3",
    categoria: "Computadores",
    preco: 2799.00,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_wsBez1OF3Z-oA44yXp7G4GYJNHXNcuaqFK6TcT4hg&s=10",
    descricao: "Notebook com SSD de 256 GB, 8 GB de memória e tela de 15,6 polegadas."
  },
  {
    nome: "Mouse Gamer RGB",
    categoria: "Acessórios",
    preco: 129.90,
    imagem: "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/m/9/m914-rgb7.jpg",
    descricao: "Sensor de alta precisão, iluminação RGB e design confortável."
  },
  {
    nome: "Teclado Mecânico",
    categoria: "Acessórios",
    preco: 249.90,
    imagem: "https://images.kabum.com.br/produtos/fotos/472045/teclado-mecanico-gamer-kbm-gaming-tg600-preto-60-e-abnt2-rgb-switch-gateron-brown-kgtg600ptma_1713282992_gg.jpg",
    descricao: "Teclas responsivas, conexão USB e iluminação para o setup."
  },
  {
    nome: "Headset com Microfone",
    categoria: "Áudio",
    preco: 189.90,
    imagem: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/391030-1000-1000/a_285051_alta_1.jpg?v=638607291871070000",
    descricao: "Som estéreo, microfone ajustável e almofadas confortáveis."
  },
  {
    nome: "SSD 480 GB",
    categoria: "Armazenamento",
    preco: 530.00,
    imagem: "https://img.terabyteshop.com.br/produto/g/ssd-kingston-a400-480gb-sata-iii-leitura-500mbs-gravacao-450mbs-sa400s37480g-imp_129879.jpg",
    descricao: "Mais velocidade para iniciar o sistema e abrir programas."
  },
  {
    nome: "Memória RAM 8 GB",
    categoria: "Componentes",
    preco: 329.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YDW6Xzsd739gAoQWSkdOmwogY1g9XGr2bCnLC3uf0olF8VjAHKNbAlw&s=10",
    descricao: "Módulo DDR4 para melhorar o desempenho em multitarefas."
  },
  {
    nome: "Roteador Wi-Fi",
    categoria: "Conectividade",
    preco: 219.90,
    imagem: "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/e/x/ex2201.jpg",
    descricao: "Sinal estável para navegar, estudar e trabalhar conectado."
  },
  {
    nome: "Mochila para Notebook",
    categoria: "Acessórios",
    preco: 159.90,
    imagem: "https://lojaibyte.vtexassets.com/arquivos/ids/442012/mochila-para-notebook-get-essential-001-min.jpg?v=638925049888230000",
    descricao: "Compartimento acolchoado e espaço para seus acessórios."
  },
  {
    nome: 'Monitor Full HD 24"',
    categoria: "Monitores",
    preco: 799.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnodIgSeSWIMg6PPHieNF3cf4SS54g8ZscJ67sfEkC1t6fp0pVBd4_quT&s=10",
    descricao: "Tela de 24 polegadas com resolução Full HD."
  },
  {
    nome: "Webcam Full HD",
    categoria: "Acessórios",
    preco: 219.90,
    imagem: "https://m.media-amazon.com/images/I/61dTSa1TG3L._AC_UF894,1000_QL80_.jpg",
    descricao: "Imagem nítida para chamadas de vídeo, aulas e reuniões."
  },
  {
    nome: "Gabinete Gamer",
    categoria: "Componentes",
    preco: 349.90,
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_wYFYr7vq1yTt9Jfm0k5cTN36k5j5RWpBj7q6not9aXZp8lJpjOg1WeC0vbTbsYk5viBwHPK7L6yJ0uAI_4XdGLlfqFnG",
    descricao: "Estrutura espaçosa com ventilação para montar seu computador."
  },
  {
    nome: "Caixa de Som USB",
    categoria: "Áudio",
    preco: 99.90,
    imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/ceadtskn/33377.jpg",
    descricao: "Som estéreo compacto com alimentação via USB."
  },
  {
    nome: "Desktop para Escritório",
    categoria: "Computadores",
    preco: 2199.90,
    imagem: "https://media.pichau.com.br/media/catalog/product/cache/22c0d71a45cddf08af7927cb2bce3571/t/g/tgt-b115-000_5_4.jpg",
    descricao: "Computador para tarefas do dia a dia e produtividade."
  },
  {
    nome: "Placa de Vídeo RTX 3060 6GB",
    categoria: "Componentes",
    preco: 1899.90,
    imagem: "https://www.pcyes.com.br/_next/image?url=%2Fapi%2Fpcyes%2Fimage%2Fcdn.oderco.com.br%2Fprodutos%2F268918%2F2BC4E49C6830A3D8E0630300A8C043A5&w=1200&q=75",
    descricao: "Desempenho gráfico para jogos, criação e edição de conteúdo."
  },
  {
    nome: "Impressora Multifuncional",
    categoria: "Impressoras",
    preco: 649.90,
    imagem: "https://m.media-amazon.com/images/I/515m44f3CWL.jpg",
    descricao: "Imprima e digitalize documentos com praticidade."
  },
  {
    nome: "Controle para PC",
    categoria: "Acessórios",
    preco: 189.90,
    imagem: "https://m.media-amazon.com/images/I/31DK+auiqfL._SL500_.jpg",
    descricao: "Controle confortável para aproveitar seus jogos no computador."
  }
];

const CHAVE_PRODUTOS = "cyber-produtos";

function carregarProdutos() {
  try {
    const produtosSalvos = JSON.parse(
      localStorage.getItem(CHAVE_PRODUTOS)
    );

    if (Array.isArray(produtosSalvos)) {
      return produtosSalvos;
    }
  } catch (erro) {
    console.warn("Não foi possível carregar os produtos salvos.", erro);
  }

  return [...produtosPadrao];
}

const produtos = carregarProdutos();

const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputPreco = document.querySelector("#preco");
const inputCategoria = document.querySelector("#categoriaProduto");
const inputDescricao = document.querySelector("#descricao");
const inputFoto = document.querySelector("#foto");
const previa = document.querySelector("#previa");
let fotoBase64 = "";

const listaProdutos = document.querySelector("#listaProdutos");
const pesquisa = document.querySelector("#pesquisa");
const categoria = document.querySelector("#categoria");
const contador = document.querySelector("#contador");
const mensagemVazia = document.querySelector("#mensagemVazia");
const mensagem = document.querySelector("#mensagem");

const formatarReal = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor);
};

function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = `alert alert-${tipo} mt-3`;
}

function mostrarProdutos(lista) {
  listaProdutos.innerHTML = "";

  if (produtos.length === 0) {
    mostrarMensagem("Nenhum produto cadastrado.", "secondary");
  } else {
    mensagem.textContent = "";
    mensagem.className = "alert mt-3 d-none";
  }

  contador.textContent =
    `${lista.length} produto(s) encontrado(s).`;

  mensagemVazia.classList.toggle(
    "d-none",
    produtos.length === 0 || lista.length !== 0
  );

  lista.forEach((produto) => {
    const coluna = document.createElement("div");
    coluna.className = "col-12 col-sm-6 col-lg-3";

    const artigo = document.createElement("article");
    artigo.className = "card product-card";

    const visual = document.createElement("div");
    visual.className = "product-visual";

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
    imagem.loading = "lazy";

    imagem.addEventListener("error", () => {
      imagem.alt = `Imagem indisponível: ${produto.nome}`;
      imagem.style.display = "none";
      visual.textContent = "Imagem indisponível";
    });

    visual.appendChild(imagem);

    const corpo = document.createElement("div");
    corpo.className = "card-body";

    const tipo = document.createElement("span");
    tipo.className = "card-category";
    tipo.textContent = produto.categoria;

    const titulo = document.createElement("h2");
    titulo.className = "card-title";
    titulo.textContent = produto.nome;

    const descricao = document.createElement("p");
    descricao.className = "product-description";
    descricao.textContent = produto.descricao;

    const preco = document.createElement("p");
    preco.className = "card-price";
    preco.textContent = formatarReal(produto.preco);

    corpo.append(tipo, titulo, descricao, preco);
    artigo.append(visual, corpo);
    coluna.appendChild(artigo);

    listaProdutos.appendChild(coluna);
  });
}

function filtrarProdutos() {
  const texto = pesquisa.value.trim().toLowerCase();
  const categoriaSelecionada = categoria.value;

  const filtrados = produtos.filter((produto) => {
    const correspondeNome =
      produto.nome.toLowerCase().includes(texto);

    const correspondeCategoria =
      categoriaSelecionada === "todos" ||
      produto.categoria === categoriaSelecionada;

    return correspondeNome && correspondeCategoria;
  });

  mostrarProdutos(filtrados);
}

inputFoto.addEventListener("change", () => {
  const arquivo = inputFoto.files[0];
  fotoBase64 = "";

  if (!arquivo) {
    previa.src = "";
    previa.classList.add("d-none");
    return;
  }

  if (!arquivo.type.startsWith("image/")) {
    inputFoto.value = "";
    mostrarMensagem("Selecione um arquivo de imagem válido.", "warning");
    return;
  }

  if (arquivo.size > 1024 * 1024) {
    inputFoto.value = "";
    mostrarMensagem("A imagem deve ter no máximo 1 MB.", "warning");
    return;
  }

  const leitor = new FileReader();

  leitor.addEventListener("load", () => {
    fotoBase64 = leitor.result;
    previa.src = fotoBase64;
    previa.classList.remove("d-none");
  });

  leitor.addEventListener("error", () => {
    fotoBase64 = "";
    inputFoto.value = "";
    previa.src = "";
    previa.classList.add("d-none");
    mostrarMensagem("Não foi possível ler a imagem selecionada.", "warning");
  });

  leitor.readAsDataURL(arquivo);
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const precoDigitado = inputPreco.value;
  const preco = Number(precoDigitado);
  const categoriaSelecionada = inputCategoria.value;

  if (
    nome === "" ||
    precoDigitado === "" ||
    !Number.isFinite(preco) ||
    preco <= 0 ||
    categoriaSelecionada === "" ||
    fotoBase64 === ""
  ) {
    mostrarMensagem(
      "Preencha todos os campos obrigatórios corretamente!",
      "warning"
    );
    return;
  }

  const novoProduto = {
    nome: nome,
    categoria: categoriaSelecionada,
    preco: preco,
    imagem: fotoBase64,
    descricao: inputDescricao.value.trim() || "Produto cadastrado no catálogo."
  };

  produtos.push(novoProduto);

  try {
    localStorage.setItem(CHAVE_PRODUTOS, JSON.stringify(produtos));
  } catch (erro) {
    produtos.pop();
    mostrarMensagem(
      "Não foi possível salvar. Tente uma imagem menor ou libere espaço no navegador.",
      "warning"
    );
    return;
  }

  formulario.reset();
  fotoBase64 = "";
  previa.src = "";
  previa.classList.add("d-none");
  pesquisa.value = "";
  categoria.value = "todos";

  mostrarProdutos(produtos);
  mostrarMensagem("Produto cadastrado com sucesso!", "success");
});

pesquisa.addEventListener("input", filtrarProdutos);
categoria.addEventListener("change", filtrarProdutos);

mostrarProdutos(produtos);



