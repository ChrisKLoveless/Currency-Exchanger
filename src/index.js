import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service';

function getRates(usd) {
  ExchangeService.getRates()
    .then(function(response) {
      if(response) {
        convert(response, usd);
      } else {
        printError(response, usd);
      }
    });
}

function convert(response, usd) {
  const convertedCurrency =
}

// UI LOGIC-------------------------------------------------------------------

function printConversion(response, usd) {
  const convertedCurrency = 
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

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleSubmit);
});