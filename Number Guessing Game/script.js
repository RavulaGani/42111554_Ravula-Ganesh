let guess=Math.floor((Math.random()*100)+1)
console.log(guess)
let count=0
const hints = document.getElementById('hints');
const attempt=document.getElementById('attempt')
let game_status = 1;
function check(){
    if(game_status == 1){
        let val=document.forms[0]['val'].value
        count++
        if(val== guess){
            hints.innerHTML = '🎉 Guess is Correct!';
            document.getElementById('Check').innerHTML = 'Reset';
            game_status=0;
        }
        else if(val<guess){
            hints.innerHTML = '📉 Guess is Lower.';  
        }
        else{
            hints.innerHTML = '📈 Guess is Higher.';
        }
        attempt.innerHTML = 'Attempts: '+count;
    }   
    else{
        reset();
        game_status = 1;
    }
}
function reset(){ 
    guess = Math.floor(Math.random() * 100) + 1;
    count = 0;
    document.getElementById('hints').innerHTML = 'Game reset! Start guessing 🎲.';
    document.getElementById('attempt').innerHTML = 'Attempts: 0';
    document.forms[0]['val'].value = '';  
    document.getElementById('Check').innerHTML = 'Check';
    attempt.innerHTML = 'Attempts: '+count;

}