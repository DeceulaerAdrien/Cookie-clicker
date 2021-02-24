let score = 30000/* new Number(document.getElementById('score').textContent) */;

document.getElementById('clickerMain').addEventListener('click',() => {
    score ++
    document.getElementById('score').innerHTML = `${score}`
    if(score >= 1000){
        document.getElementById('castor').src = "./assets/images/castor1.png"
    }
    if(score >= 10000){
        document.getElementById('castor').src = "./assets/images/castor2.png"
    }
})
let auto = 1;
document.getElementById('mult1').addEventListener('click', () => {

    if (score >= (auto * (auto + 1) * 50)) {
        score = score - (auto * (auto + 1) * 50);
        document.getElementById('score').innerHTML = `${score}`;
        auto += 1;
        setInterval(function() {
            document.getElementById('clickerMain').click();
        }, 10000 / auto);
    } else {
        auto = auto;
    }
});