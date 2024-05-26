document.addEventListener("DOMContentLoaded", function (){
const modal = document.getElementById("subscribe");
const closeBtn = document.querySelector(".closeBtn");
const form = document.getElementById("subscriberform");
const subscriberEmail = document.getElementById("subscriberEmail");

setTimeout(showModal, 5000);


function showModal(){

    if (!sessionStorage.getItem("modalClosed")) {
        modal.style.display = "block";
    }
}

function closeModal(){

}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = subscriberEmail.value;
    const data = { email: email };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            closeModal();
        })

    });
});