const elementh1 = document.getElementById('countdown');
let startingTime = 10;
const mybutton = document.getElementById('startButton');

mybutton.addEventListener('click', () => {
    const interval = setInterval(() => {

        startingTime--;

        elementh1.textContent = startingTime;

        if (startingTime <= 0) {
            clearInterval(interval);
            elementh1.textContent = "Time's up!";
        }

    }, 1000)
        ;
})