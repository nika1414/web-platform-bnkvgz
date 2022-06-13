const url =
  'https://api.nomics.com/v1/currencies/ticker?key=8a681cf70c9f62b69496dd2d51af67e91d946051&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1';
const url2 = 'https://api.coingecko.com/api/v3/exchange_rates';

fetch(url2)
  .then((resp) => resp.json())
  .then((compData) => {
    console.log(compData.rates);

    let data1 = '';
    data1 = `
    
      <option value="">${compData.rates.btc.name}</option>
      <option value="">${compData.rates.eth.name}</option>
      <option value="">${compData.rates.ltc.name}</option>
      <option value="">${compData.rates.bch.name}</option>
      <option value="">${compData.rates.bits.name}</option>
     
      `;
    let data2 = '';
    data2 = `
        
      `;
    document.getElementById('currency').innerHTML = data1;
  });
