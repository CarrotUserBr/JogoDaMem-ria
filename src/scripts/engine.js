const img = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
let openCards = [];

//Variável para embaralhar as imagens
let shuffleImg = img.sort(() => (Math.random() > 0.5) ? 2 : -1);

//Função para criar as cartas
function createCards() {
    for(let i = 0; i < img.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        let id = document.createAttribute("id");
        id.value = `${i}`;
        box.setAttributeNode(id);
        let image = document.createElement("img");
        image.src = `src/images/${shuffleImg[i]}.jpg`;
        box.appendChild(image);
        box.onclick = handleClick;
        document.querySelector(".game").appendChild(box);
    };
    console.log(`Cartas criadas!`)
    console.log(`Atualmente o boxOpen é: ${openCards.map(card => card.id)}`)
};

//Função para virar as cartas no click
function handleClick() {
        if (openCards.length < 2 && !openCards.includes(this)){
            this.classList.add("boxOpen");
            openCards.push(this);
            
            //Objetivo: Entender quando os cliques ocorrem e verificar o estado do array "openCards".
            console.log(`openCards após adicionar: ${openCards.map(card => card.id)}`);
        }

        if (openCards.length == 2) {
            setTimeout(checkMatch, 500);
        }
};

//Função para conferir se as duas cartas são iguais
function checkMatch() {
    //Objetivo: Rastrear o início e o final da verificação, bem como o estado do array 
    console.log(`Verificação iniciada!`);
    console.log(`openCards na função CheckMatch: ${openCards.map(card => card.id)}`)
    
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
    console.log(`openCards após verificação: ${openCards.map(card => card.id)}`)
    
    if(document.querySelectorAll(".boxMatch").length === img.length) {
        alert("Você venceu!");
    };

    console.log(`Verificação concluída!`)
};

//Funções startMenu
function startGame() {
    document.getElementById("startMenu").style.display = "none"
    document.getElementById("game").style.display = "flex"
}
function viewInstructions() {

}

//Função inicial
function init(){
    createCards();
};

//Chamada de função inicial
init();