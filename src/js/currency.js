export default class Currency {
  static async currencyConverter() {
    return fetch(`https://v6.exchangerate-api.com/v6/?api_key=${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      });
  }
}