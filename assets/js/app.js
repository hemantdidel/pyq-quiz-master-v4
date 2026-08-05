// =========================
// Home Category Search
// =========================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".category-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            const desc = card.querySelector("p").textContent.toLowerCase();

            if (title.includes(value) || desc.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}
