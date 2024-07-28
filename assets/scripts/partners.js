document.addEventListener("DOMContentLoaded", function() {
    const partners = [
        {
            name: "zap-hosting",
            link: "https://zap-hosting.com/Michaelninder",
            tags: ["Cheap", "Server-Hoster"],
            action: "20% OFF",
            code: "Michaelninder-a-5842"
        },
        {
            name: "mine-hoster",
            link: "https://mine-hoster.de/a/777",
            tags: ["Server-Hoster"],
            action: "30% CashBack until March 18th",
            code: ""
        },
        {
            name: "Wisehosting",
            link: "https://wisehosting.com/Michaelninder",
            tags: ["Server-Hoster"],
            action: "GET 10% OFF ON FIRST ORDER",
            code: "SAVE10"
        }
    ];

    const partnerContainer = document.querySelector(".Partners");

    partners.forEach((partner, index) => {
        const partnerDiv = document.createElement("div");
        partnerDiv.className = "Partner";

        const partnerHTML = `
            <h2>#${index + 1}</h2>
            <div class="partner-info">
                <a href="${partner.link}" target="_blank">
                    <h3>${partner.name}</h3>
                    <button class="link-button">
                        <img src="assets/images/link-icon.png" alt="Link Icon" class="link-icon">
                    </button>
                </a>
            </div>
            <div class="Sales">
                <p>${partner.action}: 
                    <input type="text" value="${partner.code}" readonly class="Code" onclick="copyCode(this)">
                </p>
                <p class="Tags">${partner.tags.join(", ")}</p>
            </div>
        `;

        partnerDiv.innerHTML = partnerHTML;
        partnerContainer.appendChild(partnerDiv);
    });
});

function copyCode(inputElement) {
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);
    document.execCommand("copy");

    const popup = document.getElementById("copyPopup");
    popup.textContent = `Copied code: "${inputElement.value}"`;
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}
