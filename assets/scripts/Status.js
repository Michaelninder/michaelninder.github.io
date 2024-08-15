document.addEventListener("DOMContentLoaded", function() {
    const statusTableBody = document.querySelector("#statusTable tbody");

    const servers = [
        { name: 'Proxy', ip: '45.85.217.4:20217' },
        { name: 'Lobby-1', ip: '45.142.112.13:20376' },
        {     name: 'XP-SMP S4', ip: '193.187.255.41:20319' },
        { name: 'Fortune-Wars', ip: '45.142.112.194:20034' },
        { name: 'SW-Practise', ip: '45.89.143.42:20037' },
    ];

    // Funktion zum Abrufen des Serverstatus
    function fetchServerStatus(server) {
        fetch(`https://api.mcsrvstat.us/2/${server.ip}`)
            .then(response => response.json())
            .then(data => {
                const statusRow = document.createElement('tr');
                
                // Name
                const nameCell = document.createElement('td');
                nameCell.textContent = server.name;
                statusRow.appendChild(nameCell);
                
                // Status
                const statusCell = document.createElement('td');
                if (data.online) {
                    statusCell.textContent = "Online";
                    statusCell.style.color = "green";
                } else {
                    statusCell.textContent = "Offline";
                    statusCell.style.color = "red";
                }
                statusRow.appendChild(statusCell);
                
                // Spieleranzahl und maximale Spieleranzahl
                const playerCountCell = document.createElement('td');
                playerCountCell.textContent = data.players ? `${data.players.online} / ${data.players.max}` : 'N/A';
                statusRow.appendChild(playerCountCell);
                
                // Zeile in die Tabelle einfügen
                statusTableBody.appendChild(statusRow);
            })
            .catch(error => {
                console.error(`Failed to connect to ${server.name}:`, error);
                const statusRow = document.createElement('tr');
                statusRow.innerHTML = `
                    <td>${server.name}</td>
                    <td style="color: red;">Offline</td>
                    <td style="color: red;">Offline</td>
                `;
                statusTableBody.appendChild(statusRow);
            });
    }

    // Status für alle Server abrufen
    servers.forEach(fetchServerStatus);
});
