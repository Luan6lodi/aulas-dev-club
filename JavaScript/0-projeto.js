const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".Currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert",
  ); // Valor real

  const currencyValueConverted = document.querySelector(".currency-value"); // Outras Moedas

  console.log(currencySelect.value);
  const dolarToday = 5.32;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}
convertButton.addEventListener("click", convertValues);
