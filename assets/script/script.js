let score = new Number(document.getElementById('score').textContent);
let x = 1;
let y = 1;
let health = 15;

document.getElementById('click').addEventListener('click', () => {
    score += x;
    document.getElementById('score').innerHTML = `<img src="./assets/images/buche.png">  ${score}`;
    if (score >= 10) {
        document.getElementById("castor").src = "./assets/images/castor1.png";
    }
    if (score >= 20) {
        document.getElementById("castor").src = "./assets/images/castor2.png";
    }

});

document.getElementById('bonusHealth').addEventListener("click", () => {

    if (score >= health) {
        score = score - health;
        document.getElementById('score').innerHTML = score;
        document.getElementById("castor").src = "./assets/images/castor.png";
        document.getElementById('bonusHealth').innerHTML = `<img src="./assets/images/healthkit.png"> ${health *= 2} points`;
        console.log(health);
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
    document.getElementById('bonusOne').innerHTML = (x * (x + 1) * 25) + ` <br> x${x*2} `;
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
    document.getElementById('bonusTwo').innerHTML = `${(y *(y + 1)*10)} <br> autoclick`;
});