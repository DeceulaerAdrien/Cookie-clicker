let score = 100000 /* new Number(document.getElementById('score').textContent) */ ;
let cursor = 1;
document.getElementById('clickerMain').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerHTML = `${score}`
    if (score >= 1000) {
        document.getElementById('castor').src = "./assets/images/castor1.png"
    }
    if (score >= 10000) {
        document.getElementById('castor').src = "./assets/images/castor2.png"
    }
})

document.getElementById('marteau').addEventListener('click', () => {

    if (score >= (cursor * (cursor + 1) * 50)) {
        score = score - (cursor * (cursor + 1) * 50);
        document.getElementById('score').innerHTML = `${score}`;
        document.getElementById('marteau').innerHTML = `<img src="./assets/images/2087470.svg"> ${cursor}  ` + (cursor * (cursor + 1) * 50);
        cursor += 1;
        setInterval(function() {
            document.getElementById('clickerMain').click();
        }, 10000 / cursor);
    } else {
        cursor = cursor;
    }
});