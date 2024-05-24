document.addEventListener("DOMContentLoaded",function(){
    const currencySelector = document.getElementById("currencySelector");
    const pricingElements = document.querySelectorAll(".pricingtable")

    function fetchExchangeRates(currency){
        const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.rates);
    }

    function updatePrices(currency){
        fetchExchangeRates(currency)
        .then(rates => {pricingElements.forEach(element => {
            const pricingType = elementclassList[0];
            const pricing = element.querySelector('${pricingType}__pricing');
            const price = parseFloat(pricing.textContent.replace('$', ''));
            const newPrice = (price * rates[currency]).toFixed(2);
            pricing.textContent = `${currency} $newPrice`;

        });
    });


    }






})