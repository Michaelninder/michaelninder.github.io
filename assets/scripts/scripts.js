document.addEventListener('DOMContentLoaded', () => {
    loadHeaderAndFooter();

    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const toggleMcFontButton = document.getElementById('toggle-mcfont');

    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    toggleMcFontButton.addEventListener('click', () => {
        document.body.classList.toggle('mc-font');
    });

    // Nur auf der Teamseite aufrufen
    if (document.getElementById('team-list')) {
        displayTeamMembers();
    }

    // Nur auf der Statusseite aufrufen
    if (document.getElementById('server-status-table')) {
        fetchServerStatus();
    }
});

function loadHeaderAndFooter() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        });
}
