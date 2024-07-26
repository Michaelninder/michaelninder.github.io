
const servers = [
    { name: 'Proxy', ip: '45.142.112.11:20081' },
    { name: 'Lobby-1', ip: '45.142.112.12:20409' },
    { name: 'XP-SMP S4', ip: '193.187.255.41:20319' },
    { name: 'Practise-1', ip: '45.85.217.109:20017' },
    { name: 'Practise-2', ip: '45.142.112.13:20376' },
    { name: 'Practise-3', ip: '45.89.143.193:20101' },
    { name: 'Build', ip: '45.89.143.141:20231' },
    { name: 'Louixchs SMP', ip: '193.187.255.36:20464' },
];

function fetchServerStatus() {
    const tableBody = document.querySelector('#server-status-table tbody');
    tableBody.innerHTML = '';

    servers.forEach(server => {
        fetch(`https://api.mcsrvstat.us/2/${server.ip}`)
            .then(response => response.json())
            .then(data => {
                const statusClass = data.online ? 'status-online' : data.debug.starting ? 'status-starting' : 'status-offline';
                const statusText = data.online ? 'Online' : data.debug.starting ? 'Starting' : 'Offline';

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${server.name}</td>
                    <td class="${statusClass}">${statusText}</td>
                    <td>${data.players ? `${data.players.online}/${data.players.max}` : 'N/A'}</td>
                    <td>${data.debug ? `${data.debug.ping}` : 'N/A'}</td>
                `;
                tableBody.appendChild(row);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen des Serverstatus:', error);
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${server.name}</td>
                    <td class="status-offline">Offline</td>
                    <td colspan="6">Fehler beim Abrufen der Daten</td>
                `;
                tableBody.appendChild(row);
            });
    });
}
