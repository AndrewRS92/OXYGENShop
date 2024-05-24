document.addEventListener("DOMContentLoaded",function(){
    const currencySelector = document.getElementById("currencySelector");
    const pricingElements = document.querySelectorAll(".pricing__table > div");
    let previousCurrency = currencySelector.value;

    function fetchExchangeRates(currency, previous){
        console.log(previous + "previo");
        const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${previous.toLowerCase()}.json`;

        return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {updatePrices(currency, data[previous.toLowerCase()])});
    }

    currencySelector.addEventListener("change", function(event) {
        fetchExchangeRates(event.target.value, previousCurrency);
        previousCurrency = event.target.value;
    });

    function updatePrices(currency, rates){

        pricingElements.forEach(element => {
            let pricingType;
            if (element.classList.contains('basic')) {
                pricingType = 'basic';
            } else if (element.classList.contains('prof')) {
                pricingType = 'prof';
            } else if (element.classList.contains('premium')) {
                pricingType = 'premium';
            }

            const pricing = element.querySelector(`.${pricingType}__pricing`);
            const currencyTypeElement = element.querySelector(`.currencyType`);
            const price = parseFloat(pricing.textContent.replace('$', ''));
            const newPrice = (price * rates[currency.toLowerCase()]).toFixed(2);
            currencyTypeElement.textContent = `${currency}`;
            pricing.textContent = `${Math.round(newPrice)}`;
        });

}

})