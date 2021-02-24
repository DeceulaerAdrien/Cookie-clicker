let score = new Number(document.getElementById('score').textContent);
let x = 1;
let y = 1;
let health = 15;
let cpt = 0;

let hideBTN = document.getElementById("randomID").style.visibility = "hidden";
let randomBtn = Math.floor(Math.random() * (10 - 1) + 1);
console.log(randomBtn);


document.getElementById('click').addEventListener('click', () => {
    cpt++;
    score += x;
    document.getElementById('score').innerHTML = `<img src="./assets/images/buche.png">  ${score}`;

    if (cpt >= 10) {
        document.getElementById("castor").src = "./assets/images/castor1.png";

    }
    if (cpt >= 20) {
        document.getElementById("castor").src = "./assets/images/castor2.png";
    }
    /*  */
    /* if (randomBtn == score) {
        setTimeout(() => {
            hideBTN = document.getElementById("randomID").style.visibility = 'visible';

        }, 1000);
        score = score + 1000;
        document.getElementById('score').innerHTML = `<img src="./assets/images/buche.png">  ${score}`;
        console.log("deuxieme" + score);
        randomBtn = Math.floor(Math.random() * (10 - 1) + 1);
    } else if (randomBtn != score) {
        hideBTN = document.getElementById("randomID").style.visibility = 'hidden';
    }*/



});

document.getElementById('bonusHealth').addEventListener("click", () => {

    if (score >= health) {
        score = score - health;
        document.getElementById('score').innerHTML = score;
        document.getElementById("castor").src = "./assets/images/castor.png";
        document.getElementById('bonusHealth').innerHTML = `<img src="./assets/images/healthkit.png"><br>${health *= 2} points`;
        console.log(health);
        cpt = 0;
    }
});

document.getElementById('bonusOne').addEventListener('click', () => {
    if (score >= (x * (x + 1) * 25)) {
        score = score - (x * (x + 1) * 25);
        document.getElementById('score').innerHTML = `<img src="./assets/images/buche.png">  ${score}`;
        x += 1;
    } else {
        x = x;
    }
    document.getElementById('bonusOne').innerHTML = `<img src="./assets/images/buche.png" height="10px"> ${(x * (x + 1) * 25)}` + `<br> <img src="./assets/images/multiplicator.png" height="10px">${x*2} `;
});

document.getElementById('bonusTwo').addEventListener('click', () => {

    if (score >= (y * (y + 1) * 10)) {
        score = score - (y * (y + 1) * 10);
        document.getElementById('score').innerHTML = `<img src="./assets/images/buche.png">  ${score}`;
        y += 1;
        setInterval(function() {
            document.getElementById('click').click();
        }, 10000 / y);
    } else {
        y = y;
    }
    document.getElementById('bonusTwo').innerHTML = `<img src="./assets/images/hammer.png"> ${(y *(y + 1)*10)} <br> autoclick`;
});