
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
    "alert-success",
    "alert-danger",
    "alert-warning"
  );

  if (
    nome === "" ||
    idadeDigitada === "" ||
    !Number.isInteger(idade) ||
    idade < 0
  ) {
    resultado.textContent =
      "Informe seu nome e uma idade inteira válida.";
    resultado.classList.add("alert-warning");
    return;
  }

  const maiorDeIdade = idade >= 18;

  if (maiorDeIdade) {
    resultado.textContent =
      `Olá, ${nome}! Você é maior de idade.`;
    resultado.classList.add("alert-success");
  } else {
    resultado.textContent =
      `Olá, ${nome}! Você é menor de idade.`;
    resultado.classList.add("alert-danger");
  }
});
