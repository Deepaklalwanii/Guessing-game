window.addEventListener('DOMContentLoaded', function () {    

    const guessInput = document.querySelector('.guess');
    const button = document.querySelector('.btn');
    let user_points = document.getElementById('user-guess');
    let computer_points = document.getElementById('computer-guess');
    const msg = document.querySelector('.msg-box');
    let numbers = Math.floor(Math.random() * 20 + 1);
    let attempts = 0;
    const maxAttempts = 5;
    let computer_score = 0;
    let user_score = 0;

    guessInput.addEventListener('keyup', function () {
        const guessValue = guessInput.value;
        if ( guessValue < 0 ){
            guessInput.value = 0
        }else if ( guessValue > 20 ) {
            guessInput.value = 20
        }else if(guessValue == ""){
            guessInput.value = 0;
        }
    });

    function submit(){
        var guessValue = guessInput.value;
        guessValue = Number( guessValue )
          attempts++;
        
        if(guessValue == numbers){
            msg.innerHTML = 'Congratulation! You Won.';
            user_score++;
            user_points.innerHTML = user_score;
            resetGame()

        }else if(attempts >= maxAttempts){
            msg.innerHTML = `Game Over! You have reached the maximum attempts, The number was ${numbers}, Wanna Try Again?`;
            computer_score++;
            computer_points.innerHTML = computer_score;
            resetGame()
        }else if(guessValue < numbers){
            msg.innerHTML = 'Try Again! your guess is too low.';

        }else if(guessValue > numbers){
            msg.innerHTML = 'Try Again! your guess is too high.';
            
        }


    }

    function resetGame() {
        numbers = Math.floor(Math.random() * 20 + 1);
        attempts = 0;
        guessInput.value = '';
        guessInput.disabled = false;
        button.disabled = false;
    }
    
    button.addEventListener('click', submit);

    guessInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            submit();
        }
    });

});