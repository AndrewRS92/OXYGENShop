document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const consentCheckbox = document.getElementById("consent");

    nameInput.addEventListener("input", function() {
        if (!validateName(nameInput.value)) {
            nameInput.classList.add("error-border");
        } else {
            nameInput.classList.remove("error-border");
        }
    });

    emailInput.addEventListener("input", function() {
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add("error-border");
        } else {
            emailInput.classList.remove("error-border");
        }
    });

    consentCheckbox.addEventListener("input", function() {
        if (!consentCheckbox.checked) {
            document.getElementById("consentError").textContent = "Please accept the terms.";
        } else {
            document.getElementById("consentError").textContent = "";
        }
    });

    function validateName(name) {
        return /^[a-zA-Z\s]{2,100}$/.test(name);
    }

    function validateEmail(email) {
        const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
        return emailRegex.test(email);
    }
});
