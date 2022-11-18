import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service';

function getRates(usd, currency) {
  ExchangeService.getRates()
    .then(function (response) {
      if (response) {
        printConversion(response, usd, currency);
      } else {
        printError(response, usd, currency);
      }
    });
}



// UI LOGIC-------------------------------------------------------------------

function printConversion(response, usd, currency) {
  if (usd <= 0 || usd === undefined || currency === undefined) {
    const h4 = document.createElement("h4");
    const errString = `Currency Not Found: Please enter a valid Number and Currency`;
    h4.append(errString);
    document.querySelector("#output").append(h4);
  }
  else if (currency === "AUD") {
    let convertedCurrency = (usd * response.conversion_rates.AUD).toFixed(2);
    document.querySelector("#output").innerHTML = `Your money is worth $${convertedCurrency} in Australian Dollars`;
  }
  else if (currency === "CNY") {
    let convertedCurrency = (usd * response.conversion_rates.CNY).toFixed(2);
    document.querySelector("#output").innerHTML = `Your money is worth ${convertedCurrency} in Chinese Yuan`;
  }
  else if (currency === "GBP") {
    let convertedCurrency = (usd * response.conversion_rates.GBP).toFixed(2);
    document.querySelector("#output").innerHTML = `Your money is worth $${convertedCurrency} in Pounds Sterling`;
  }
  else if (currency === "INR") {
    let convertedCurrency = (usd * response.conversion_rates.INR).toFixed(2);
    document.querySelector("#output").innerHTML = `Your money is worth $${convertedCurrency} in Indian Rupees`;
  }
  else if (currency === "RUB") {
    let convertedCurrency = (usd * response.conversion_rates.RUB).toFixed(2);
    document.querySelector("#output").innerHTML = `Your money is worth $${convertedCurrency} in Russian Rubles`;
  }
  else {
    const h4 = document.createElement("h4");
    const errString = `Currency Not Found: Please enter a valid Number and Currency`;
    h4.append(errString);
    document.querySelector("#output").append(h4);
  }
}

function printError(error, usd) {
  document.querySelector("#output").innerHTML = `There was an error accessing exchange data: ${error}.
  Cannot convert ${usd}.`;
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