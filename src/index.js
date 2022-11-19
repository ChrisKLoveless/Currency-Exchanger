import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import "animate.css";
import ExchangeService from './js/exchange-service';

function getRates(usd, currency) {
  ExchangeService.getRates()
    .then(function (response) {
      if (response.result === 'success') {
        printConversion(response, usd, currency);
      } else {
        printError(response, usd, currency);
      }
    });
}
// UI LOGIC-------------------------------------------------------------------

function printConversion(response, usd, currency) {
  const h4 = document.createElement("h4");
  if (usd <= 0 || usd === undefined || currency === undefined) {
    const errString = `There was an error accessing exchange data: Please enter a valid Number and Currency`;
    h4.append(errString);
    document.querySelector("#output").append(h4);
  }
  else if (currency === "AUD") {
    const convertedCurrency = (usd * response.conversion_rates.AUD).toFixed(2);
    const resultString = `$${usd} USD is equal to $${convertedCurrency} in Australian Dollars`;
    h4.append(resultString);
    document.querySelector("#output").append(h4);
  }
  else if (currency === "CNY") {
    const convertedCurrency = (usd * response.conversion_rates.CNY).toFixed(2);
    const resultString = `$${usd} USD is equal to 元${convertedCurrency} in Chinese Yuan`;
    h4.append(resultString);
    document.querySelector("#output").append(h4);
  }
  else if (currency === "GBP") {
    const convertedCurrency = (usd * response.conversion_rates.GBP).toFixed(2);
    const resultString = `$${usd} USD is equal to £${convertedCurrency} in Pounds Sterling`;
    h4.append(resultString);
    document.querySelector("#output").append(h4);
  }
  else if (currency === "INR") {
    const convertedCurrency = (usd * response.conversion_rates.INR).toFixed(2);
    const resultString = `$${usd} USD is equal to ₹${convertedCurrency} in Indian Rupees`;
    h4.append(resultString);
    document.querySelector("#output").append(h4); 
  }
  else if (currency === "RUB") {
    const convertedCurrency = (usd * response.conversion_rates.RUB).toFixed(2);
    const resultString = `$${usd} USD is equal to ₽${convertedCurrency} in Russian Rubles`;
    h4.append(resultString);
    document.querySelector("#output").append(h4); 
  }
  else {
    const h4 = document.createElement("h4");
    const errString = `There was an error accessing exchange data: Please enter a valid Number and Currency`;
    h4.append(errString);
    document.querySelector("#output").append(h4);
  }
}

function printError(error, usd, currency) {
  document.querySelector("#output").innerHTML = `There was an error accessing exchange data: ${error}.
  Cannot convert $${usd} to ${currency}.`;
}

function handleSubmit(event) {
  event.preventDefault();
  document.querySelector("#output").innerHTML = null;
  const usd = document.querySelector("#usd-input").value;
  const currency = document.querySelector("#conv-input").value;
  document.querySelector("#usd-input").value = null;
  document.querySelector("#conv-input").value = null;
  getRates(usd, currency);
}

function handleReset() {
  document.location.reload();
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleSubmit);
  this.document.querySelector("#reset").addEventListener("click", handleReset);
});