import { friends } from "./friendsData.js";

// Limit On Size of Array
// friends.length = 31;

document.addEventListener("DOMContentLoaded", () => {

    // Wrapper for Card
    let cardWrapper = document.querySelector(".card-wrapper");
    friends.forEach((friend) => {

        // Card 
        let card = document.createElement("div");
        card.className = "card";

        // Image
        let cardImage = document.createElement("img");
        cardImage.alt = "card-image";
        cardImage.className = "card-image";

        // Full Name
        let cardFullName = document.createElement("h3");
        cardFullName.className = "card-fullname";

        // Email
        let cardEmail = document.createElement("p");
        cardEmail.className = "card-email";

        // Text Wrapper (Full Name & Email)
        let textContentWrapper = document.createElement("div");
        textContentWrapper.className = "text-content-wrapper";
        textContentWrapper.append(cardFullName, cardEmail);
        card.append(cardImage, textContentWrapper);

        // Adding Dynamic Data into Elements
        cardImage.src = friend.img;
        cardFullName.innerText = friend.first_name + " " + friend.last_name;
        cardEmail.innerText = friend.email;
        // Appending Created Child into Body
        cardWrapper.appendChild(card);
    })
})