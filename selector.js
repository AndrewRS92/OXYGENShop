document.addEventListener("DOMContentLoaded",function(){
    const currencySelector = document.getElementById("currencySelector");
    const pricingElements = document.querySelectorAll(".pricingtable")

    function fetchExchangeRates(currency){
        const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.rates);
    }

    currencySelector.addEventListener("change", function() {
        const selectedCurrency = currencySelector.value;
        updatePrices(selectedCurrency);
    });

    updatePrices(currencySelector.value);    

})