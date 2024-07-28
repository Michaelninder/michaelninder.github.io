document.addEventListener('DOMContentLoaded', () => {
    const changelogList = document.getElementById('changelog-list');
    const changelogContent = document.getElementById('changelog-content');

    // Liste der Changelogs (in der Praxis könnte dies von einem Server geladen werden)
    const changelogs = [
        'Webpage Update - july 28th 09:28:33.md',
        'changelog2.md',
        'changelog3.md',
        'changelog4.md',
        'changelog5.md',
        'changelog6.md',
        'changelog7.md',
        'changelog8.md',
        'changelog9.md',
    ];

    // Changelogs in der Liste anzeigen
    // Auflistung Der Changelogs
    changelogs.forEach((changelog, index) => {
        const changelogItem = document.createElement('div');
        changelogItem.className = 'changelog-item';
        changelogItem.textContent = `Changelog ${index + 1}`;
        changelogItem.addEventListener('click', () => loadChangelog(changelog));
        changelogList.appendChild(changelogItem);
    });

    // Funktion zum Laden und Anzeigen eines Changelogs
    function loadChangelog(filename) {
        fetch(`changelogs/${filename}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                changelogContent.innerHTML = marked(data);
            })
            .catch(error => {
                changelogContent.innerHTML = `<p>Failed to load "${filename}": ${error.message}</p>`;
            });
    }
});
