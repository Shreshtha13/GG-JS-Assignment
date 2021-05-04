const hero = document.querySelector(".hero");

const text = hero.querySelector('h1');

const walk = 80;

function shadow(e) {

    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    var x = e.offsetX;
    var y = e.offsetY;



    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `
    
    ${xWalk}px ${yWalk}px 2px rgba(242, 17, 112 , 0.7) ,
    ${xWalk * -1}px ${yWalk}px 3px rgba(250, 153, 5, 0.4),
    ${xWalk}px ${yWalk*-1}px 5px rgba(255, 82, 0, 0.5)`;
}

hero.addEventListener("mousemove", shadow);
