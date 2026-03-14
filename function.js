const imgsPlayer1 = document.querySelectorAll(".img-player1");
const imgsPlayer2 = document.querySelectorAll(".img-player2");
const refresh = document.getElementById("refresh");
const btn = document.getElementById("btn");
const body = document.getElementById("body");

let suits = ["heart", "club", "spade", "diamond"];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let cards = [];

nums.forEach((num) => {
    suits.forEach((suit) => {
        cards.push(`${String(num)} ${suit}`);
    });
});

function getRandomCards(numCards) {
    let finalCards = [];
    let cloneCards = [...cards];
    for (let i = 0; i < numCards; i++) {
        let randNum = Math.floor(Math.random() * cloneCards.length);
        finalCards.push(cloneCards[randNum]);
        cloneCards.splice(randNum, 1);
    }
    return finalCards;
}

function updateImages(images, finalCards) {
    images.forEach((image, index) => {
        image.setAttribute("src", `img/${finalCards[index]}.png`);
    });
}

refresh.addEventListener("click", () => {
    let player1Cards = getRandomCards(3);
    let player2Cards = getRandomCards(3);
    updateImages(imgsPlayer1, player1Cards);
    updateImages(imgsPlayer2, player2Cards);
});

// Initial load
let initialPlayer1Cards = getRandomCards(3);
let initialPlayer2Cards = getRandomCards(3);
updateImages(imgsPlayer1, initialPlayer1Cards);
updateImages(imgsPlayer2, initialPlayer2Cards);

let bgcolor = true;
btn.addEventListener("click", () => {
    if (bgcolor) {
        body.style.backgroundColor = "rgb(43, 13, 82)";
        btn.style.backgroundColor = "rgb(106, 158, 115)";
    } else {
        body.style.backgroundColor = "rgb(106, 158, 115)"; // Assuming the original color is white
        btn.style.backgroundColor = " rgb(43, 13, 82)"; // Reset to original button color
    }
    bgcolor =! bgcolor;
});