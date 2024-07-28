

document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = [
        { name: 'Michaelninder', rank: 'Admin', task: 'Managing the Server', color: 'red' },
        { name: 'Louixch', rank: 'Admin', task: 'Managing the Server', color: 'red' },
        { name: 'Duesslo', rank: 'Admin', task: 'Programming', color: 'red' },
        { name: 'Robocat1512', rank: 'Admin', task: 'Stuff', color: 'red' },
        { name: 'F3lix1337', rank: 'Mod', task: 'Support and Anticheat-Ping Check', color: 'orange' },
        { name: 'Nachts_Wach', rank: 'Mod', task: 'Support ...', color: 'orange' },
        { name: 'Z1K_Z4K', rank: 'Builder', task: 'Building Maps...', color: 'lightgray' },
        { name: 'TeamNils', rank: 'Media', task: 'Streaming on the server', color: 'lightblue' },
        { name: 'Fabimaster6h', rank: 'SrMod', task: 'Mod Stuff', color: 'orange' },
    ];

    const teamTable = document.getElementById('team-table-body');

    teamMembers.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.name}</td>
            <td style="color: ${member.color};">${member.rank}</td>
            <td>${member.task}</td>
        `;
        teamTable.appendChild(row);
    });
});
