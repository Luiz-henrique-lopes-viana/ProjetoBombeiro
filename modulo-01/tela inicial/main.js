document.addEventListener("DOMContentLoaded", () => {
    const newsButton = document.getElementsByClassName("news")[0];
    console.log(newsButton)
    
    if (newsButton) {
        newsButton.addEventListener("click", () => {
            window.location.href = "http://127.0.0.1:5500/modulo-01/noticias/noticias.html";
        });
    }
});
