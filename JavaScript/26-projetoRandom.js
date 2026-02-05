alert("JS conectado 😎")
function sortear() {
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  if (min >= max) {
    document.getElementById("resultado").innerHTML = "⚠️ Intervalo inválido!";
    return;
  }

  const numero = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("resultado").innerHTML = `🎉 Resultado: <span>${numero}</span>`;
}
