document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт загружен");
});

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Сообщение отправлено!");
});
