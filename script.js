const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const idadeDigitada = inputIdade.value.trim();
  const idade = Number(idadeDigitada);

  resultado.classList.remove(
    "d-none",
    "alert-info",
    "alert-danger",
    "alert-success",
    "alert-warning"
  );

  if (!nome || idadeDigitada === "" || !Number.isFinite(idade) || idade < 0) {
    resultado.textContent = "Informe seu nome e uma idade válida.";
    resultado.classList.add("alert-warning");
    return;
  }

  const maiorDeIdade = idade >= 18;
  resultado.textContent = maiorDeIdade
    ? `Olá, ${nome}! Você é maior de idade.`
    : `Olá, ${nome}! Você é menor de idade.`;
  resultado.classList.add(maiorDeIdade ? "alert-success" : "alert-danger");
});