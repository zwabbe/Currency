import $ from 'jquery';
import Currency from './js/currency.js';



function getElements(response) {
  if (response.ok) {
    console.log("good juju");
  } else {
    console.log("bad juju");
  }
}



$(document).ready(function () {
  // event.preventDefault();


  
  Currency.currencyConverter()
    .then(function (response) {
      getElements(response);
    });


}); 