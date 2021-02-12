export default class Currency {
  static async currencyConverter() {
    try {
      const response = fetch(`http://v6.exchangerate-api.com/v6/?api_key=${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error;
    }
  }
}