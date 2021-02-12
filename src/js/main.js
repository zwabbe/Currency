import $ from 'jquery';
import Currency from './currency.js';


$(document).ready(function () {

  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;



  function getElements(response) {
    if (response && status === 200) {
      console.log("hi");
    }
  }

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(this.status)
      getElements(response);
    }
  }

  request.onreadystatechange();

  // event.preventDefault();

  Currency.currencyConverter()
    .then(function (response) {
      getElements(response);
    });

});