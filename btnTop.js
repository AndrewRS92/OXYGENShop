document.addEventListener("DOMContentLoaded", () => {
    const returnTopBtn = document.getElementById("returnTop");

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;


        if (scrolled > 50) {
            returnTopBtn.style.display = "block";
        } else {
            returnTopBtn.style.display = "none";
        }
    });


    returnTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});