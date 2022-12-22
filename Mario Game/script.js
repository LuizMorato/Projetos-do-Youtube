const mario = document.querySelector('.mario');
const flower = document.querySelector('.flower');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');  

    },500);
}

const loop = setInterval(() => {

    console.log('loop')

    const flowerPosition = flower.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (flowerPosition <= 120 && flowerPosition > 0 && marioPosition < 80){

        flower.style.animation = 'none';
        flower.style.left = `${flowerPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${flowerPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop)
    }

}, 10);


document.addEventListener('keydown', jump);
