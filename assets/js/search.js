// ==============================
// Batch Search
// ==============================

const searchInput = document.getElementById("searchBatch");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".batch-card");

        cards.forEach(card => {

            const title = card.querySelector("h2").textContent.toLowerCase();

            const desc = card.querySelector("p").textContent.toLowerCase();

            if (title.includes(value) || desc.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}
