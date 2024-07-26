
const teamMembers = [
    { gametag: 'Player1', rank: 'Admin', task: 'Server Management' },
    { gametag: 'Player2', rank: 'Moderator', task: 'Community Support' },
    // Weitere Team-Mitglieder hier hinzufügen
];

function displayTeamMembers() {
    const teamList = document.getElementById('team-list');
    teamList.innerHTML = '';

    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member');
        memberDiv.innerHTML = `
            <img src="https://minotar.net/avatar/${member.gametag}/100" alt="Skin von ${member.gametag}">
            <div>
                <p><strong>Gametag:</strong> ${member.gametag}</p>
                <p><strong>Rang:</strong> ${member.rank}</p>
                <p><strong>Aufgabe:</strong> ${member.task}</p>
            </div>
        `;
        teamList.appendChild(memberDiv);
    });
}
