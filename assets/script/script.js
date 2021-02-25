let score = new Number(document.getElementById('score').textContent);


document.getElementById('clickerMain').addEventListener('click', () => {
    score++
    document.getElementById('score').innerHTML = `${score}`
    if (score >= 1000) {
        document.getElementById('castor').src = "./assets/images/castor1.png"
    }
    if (score >= 10000) {
        document.getElementById('castor').src = "./assets/images/castor2.png"
    }
});

let cursor = 1;

document.getElementById('cursor').addEventListener('click', () => {

    let hoverText = document.getElementById("cursor");
    hoverText.setAttribute("title", 'Cost : ' + ((cursor * (cursor + 1) * 25)).toFixed() + ' Points');
    if (score >= (cursor * (cursor + 1) * 25)) {
        score = score - (cursor * (cursor + 1) * 25);
        document.getElementById('score').innerHTML = `${score}`;
        document.getElementById('cursor').innerHTML = `<img src='assets/images/cursor.png' class ="cursor" draggable="false"></br><span>  ${cursor}</span>`;
        cursor += 1;
        setInterval(function() {
            document.getElementById('clickerMain').click();

        }, 5000 / cursor);

    } else {
        cursor = cursor;
    }
});
let epee = 1;
let bonusEpee = 3;
document.getElementById('epee').addEventListener('click', () => {
    if (score >= (epee * (epee + 1) * 150)) {
        score = score - (epee * (epee + 1) * 150);
        document.getElementById('score').innerHTML = `${score}`;
        document.getElementById('epee').innerHTML = `<img src='assets/images/sword.svg' class ="epee" draggable="false"></br><span>  ${epee}</span>`;
        let hoverText = document.getElementById("epee");
        hoverText.setAttribute("title", 'Cost : ' + (epee * (epee + 1) * 150).toFixed() + ' Points');
        epee += 1;

        setInterval(function() {
            document.getElementById('score').innerHTML = score += bonusEpee;
        }, 10000 / epee);
    } else {
        epee = epee;
    }
});
let pistol = 1;
let bonusPistol = 7;

document.getElementById('pistol').addEventListener('click', () => {

    if (score >= (pistol * (pistol + 1) * 325)) {
        score = score - (pistol * (pistol + 1) * 325);
        document.getElementById('score').innerHTML = `${score}`;
        document.getElementById('pistol').innerHTML = `<img src='assets/images/pistol.svg' class ="pistol" draggable="false"></br><span>  ${pistol}</span>`;
        let hoverText = document.getElementById("pistol");
        hoverText.setAttribute("title", 'Cost : ' + (pistol * (pistol + 1) * 325).toFixed() + ' Points');
        pistol += 1;
        setInterval(function() {
            document.getElementById('score').innerHTML = score += bonusPistol;
        }, 10000 / pistol);
    } else {
        pistol = pistol;
    }
});
let fusil = 1;
let bonusFusil = 15;
document.getElementById('machinegun').addEventListener('click', () => {

    if (score >= (fusil * (fusil + 1) * 675)) {
        score = score - (fusil * (fusil + 1) * 675);
        document.getElementById('score').innerHTML = `${score}`;
        document.getElementById('machinegun').innerHTML = `<img src='assets/images/machinegun.svg' class ="machinegun" draggable="false"></br><span>  ${fusil}</span>`;
        let hoverText = document.getElementById("machinegun");
        hoverText.setAttribute("title", 'Cost : ' + (fusil * (fusil + 1) * 675).toFixed() + ' Points');
        fusil += 1;
        setInterval(function() {
            document.getElementById('score').innerHTML = score += bonusFusil;
        }, 10000 / fusil);
    } else {
        fusil = fusil;
    }
});
let sniper = 1;
let bonusSniper = 31;
document.getElementById('sniper').addEventListener('click', () => {

    if (score >= (sniper * (sniper + 1) * 1375)) {
        score = score - (sniper * (sniper + 1) * 1375);
        document.getElementById('score').innerHTML = `${score}`;
        document.getElementById('sniper').innerHTML = `<img src='assets/images/sniper.svg' class ="sniper" draggable="false"></br><span>  ${sniper}</span>`;
        let hoverText = document.getElementById("sniper");
        hoverText.setAttribute("title", 'Cost : ' + (sniper * (sniper + 1) * 1375).toFixed() + ' Points');
        sniper += 1;
        setInterval(function() {
            document.getElementById('score').innerHTML = score += bonusSniper;
        }, 10000 / sniper);
    } else {
        sniper = sniper;
    }
});
let bazooka = 1;
let bonusBazooka = 62;
document.getElementById('bazooka').addEventListener('click', () => {

    if (score >= (bazooka * (bazooka + 1) * 2775)) {
        score = score - (bazooka * (bazooka + 1) * 2775);
        document.getElementById('score').innerHTML = `${score}`;
        document.getElementById('bazooka').innerHTML = `<img src='assets/images/bazooka.svg' class ="bazooka" draggable="false"></br><span>  ${bazooka}</span>`;
        let hoverText = document.getElementById("bazooka");
        hoverText.setAttribute("title", 'Cost : ' + (bazooka * (bazooka + 1) * 2775).toFixed() + ' Points');
        bazooka += 1;
        setInterval(function() {
            document.getElementById('score').innerHTML = score += bonusBazooka;
        }, 10000 / bazooka);
    } else {
        bazooka = bazooka;
    }
});