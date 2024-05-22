document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
});
