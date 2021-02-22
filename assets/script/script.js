let score = new Number (document.getElementById('score').textContent);
let x = 1;


document.getElementById('click').addEventListener('click',()=>{
    score += x;
    document.getElementById('score').innerHTML = score ;
});

document.getElementById('bonusOne').addEventListener('click',()=>{
    if(score >= (x *(x + 1)*5)){
        score = score - (x *(x + 1)*5);
        document.getElementById('score').innerHTML = score ;
        x *= 2;
    }
    else{
        x = x;
    }
    document.getElementById('bonusOne').innerHTML = (x *(x + 1)*5);
});


console.log(score);