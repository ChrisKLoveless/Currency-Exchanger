import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service';

function getRates(usd, currency) {
  ExchangeService.getRates()
    .then(function(response) {
      if(response) {
        printConversion(response, usd, currency);
      } else {
        printError(response, usd, currency);
      }
    });
}



// UI LOGIC-------------------------------------------------------------------

function printConversion(response, usd, currency) {
  if(currency === "AUD") {
    let convertedCurrency = usd * response.conversion_rates.AUD;
    document.querySelector("#output").innerHTML = `Your money is worth ${convertedCurrency} in Australian Dollars`;
  }
}

function printError(error, usd) {
  document.querySelector("#output").innerHTML = `There was an error accessing exchange data: ${error}.
  Cannot convert ${usd}.`;
}

function handleSubmit(event) {
  event.preventDefault();
  const usd = document.querySelector("#usd-input").value;
  const currency = document.querySelector("#conv-input").value;

  getRates(usd, currency);
}

function handleReset() {
  document.location.reload();
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleSubmit);
  this.document.querySelector("#reset").addEventListener("click", handleReset);
});