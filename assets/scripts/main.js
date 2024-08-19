document.addEventListener("DOMContentLoaded", function() {
    const serverIpElement = document.querySelector(".server-ip");
    const ipElement = document.querySelector(".ip");

    // Funktion zum Kopieren der IP-Adresse
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            console.log('IP-Adresse kopiert: ' + text);
            ipElement.textContent = "IP copied!";
            ipElement.style.color = "blue";  // Farbe nach dem Kopieren ändern
            setTimeout(() => {
                ipElement.textContent = serverIpElement.dataset.ip;
                ipElement.style.color = "";  // Farbe zurücksetzen
            }, 2000);
        }).catch(function(err) {
            console.error('Fehler beim Kopieren der IP-Adresse: ', err);
        });
    }

    // Event-Listener für das Klicken auf die IP-Adresse
    ipElement.addEventListener("click", function() {
        const ip = serverIpElement.dataset.ip;
        copyToClipboard(ip);
    });

    // Funktion zum Abrufen der Spieleranzahl (Beispiel für Server-Status)
    fetch('https://api.mcsrvstat.us/2/' + serverIpElement.dataset.ip)
        .then(response => response.json())
        .then(data => {
            if (data.players && data.players.online !== undefined) {
                serverIpElement.textContent = data.players.online;
            } else {
                serverIpElement.textContent = "0";
            }
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Spieleranzahl: ', error);
            serverIpElement.textContent = "0";
        });
});
