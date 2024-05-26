document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("subscribeModal");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("subscribeForm");
    const subscriberEmail = document.getElementById("subscriberEmail");

    
    setTimeout(showModal, 5000);

   
    window.addEventListener("scroll", function () {
        if ((window.scrollY + window.innerHeight) / document.body.scrollHeight >= 0.25) {
            showModal();
        }
    });

    function showModal() {
        if (!sessionStorage.getItem("modalClosed")) {
            modal.style.display = "block";
        }
    }

    function closeModal() {
        modal.style.display = "none";
        sessionStorage.setItem("modalClosed", "true");
    }

    
    closeBtn.addEventListener("click", closeModal);

    
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    
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
