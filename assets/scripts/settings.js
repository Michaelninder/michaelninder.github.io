/*
    document.addEventListener('DOMContentLoaded', () => {
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


*/

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
