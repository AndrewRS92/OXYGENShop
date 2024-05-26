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

})