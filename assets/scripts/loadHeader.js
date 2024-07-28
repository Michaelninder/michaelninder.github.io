function loadHeader() {
    const headerContainer = document.querySelector('header');
    if (headerContainer) {
        fetch('./assets/html/header.html')
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
                initializeHeaderFeatures();
            })
            .catch(error => {
                console.error('Error loading header:', error);
            });
    }
}

function initializeHeaderFeatures() {
    const colorToggle = document.getElementById("color-toggle");
    colorToggle.addEventListener("click", toggleColorMode);

    const languageToggle = document.getElementById("language-toggle");
    languageToggle.addEventListener("click", () => {
        const currentLang = document.getElementById("language").textContent;
        const newLang = currentLang === "en-us" ? "de-de" : "en-us";
        document.getElementById("language").textContent = newLang;
        changeLanguage(newLang);
    });

    const savedMode = localStorage.getItem("color-mode");
    if (savedMode) {
        document.body.classList.toggle("dark-mode", savedMode === "dark");
        document.getElementById("color-toggle").innerHTML = savedMode === "dark"
            ? '<img src="/assets/images/icons/sun.png" alt="Toggle Color Mode">'
            : '<img src="/assets/images/icons/moon.png" alt="Toggle Color Mode">';
    }
}

function toggleColorMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("color-mode", isDarkMode ? "dark" : "light");
    document.getElementById("color-toggle").innerHTML = isDarkMode
        ? '<img src="/assets/images/icons/sun.png" alt="Toggle Color Mode">'
        : '<img src="/assets/images/icons/moon.png" alt="Toggle Color Mode">';
}

function changeLanguage(lang) {
    window.location.href = `/${lang}/index.html`;
}

document.addEventListener("DOMContentLoaded", loadHeader);
