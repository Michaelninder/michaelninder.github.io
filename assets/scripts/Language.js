function changeLanguage(lang) {
    window.location.href = `/${lang}/index.html`;
}

document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle");
    const languageMenu = document.getElementById("language-menu");

    languageToggle.addEventListener("click", () => {
        languageMenu.classList.toggle("hidden");
    });

    const savedLang = document.getElementById("language").textContent;
    document.getElementById("language").textContent = savedLang === "en-us" ? "English" : "Deutsch";
});
