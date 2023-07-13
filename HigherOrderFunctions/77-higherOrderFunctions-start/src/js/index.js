import currencyRates from './currencyRates.json';
import cart from './cart.json';
import { renderRows, renderTotals } from './view';
const currencyPicker = document.querySelector("select[name='currency-picker']");

currencyPicker.innerHTML = Object.keys(currencyRates)
  .map((key) => `<option>${key}</option>`)
  .join('');

  currencyPicker.addEventListener('change', computeCart);
  Now comes the core of this exercise - the higher order function. Create the following function right before the computeCart function. 
  const currencyConvert = (currency, rates, fn) => {
    const conversionRate = rates[currency] ?? 1;
    return (cart) => {
      const revised = cart.map((item) => {
        return {
          ...item,
          cost: item.cost * conversionRate,
        };
      });
      return fn(revised);
    };
  };

  const computeCart = function () {
    const currency = this?.value;
    currencyConvert(currency, currencyRates, renderRows)(cart);
    currencyConvert(currency, currencyRates, renderTotals)(cart);
  };

const computeCart = function () {
  renderRows(cart);
  renderTotals(cart);
};

computeCart();

