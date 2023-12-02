const img = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
let openCards = [];

let shuffleImg = img.sort(() => (Math.random() > 0.5) ? 2 : -1);

for(let i = 0; i < img.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    let id = document.createAttribute("id");
    id.value = `${i}`;
    box.setAttributeNode(id);
    let image = document.createElement("img");
    image.src = `src/images/${shuffleImg[i]}.jpg`;
    box.appendChild(image)
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
};

function handleClick() {
        if (openCards.length < 2 && !openCards.includes(this)){
            this.classList.add("boxOpen");
            openCards.push(this);
        }

        if (openCards.length == 2) {
            setTimeout(checkMatch, 500);
        }
};

function checkMatch() {
    const [card1, card2] = openCards;
    
    const id1 = card1.getAttribute("id");
    const img1 = img[id1];

    const id2 = card2.getAttribute("id");
    const img2 = img[id2];

    if(img1 === img2) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];
    if(document.querySelectorAll(".boxMatch").length === img.length) {
        alert("Você venceu!")
    }
}