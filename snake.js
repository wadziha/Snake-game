let vstupni_souradnice = {x: 0, y: 0};
let rychlost_hada = 10;
let skore = 0;
let cas_posledni_vykresleni = 0;
let snake_pozice = [{x: 19, y: 11}];
jidlo = {x: 6, y: 7};


function main(aktualni_cas) {
    window.requestAnimationFrame(main);
    // console.log(aktualni_cas)
    if ((aktualni_cas - cas_posledni_vykresleni) / 1000 < 1 / rychlost_hada) {
        return;
    }
    cas_posledni_vykresleni = aktualni_cas;
    game_draw();
}


function nastav_hrace(jmeno) {
    aktualni_jmeno_hrace = jmeno
    aktualni_Hrac.innerHTML = "Hráč: " + jmeno
}

function game_draw(){

   //zobrazeni hada 
    hraci_plocha.innerHTML = "";
    snake_pozice.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        hraci_plocha.appendChild(snakeElement);
    });
    // zobrazeni jidla 
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = jidlo.y;
    foodElement.style.gridColumnStart = jidlo.x;
    foodElement.classList.add('jidlo')
    hraci_plocha.appendChild(foodElement);
}
    window.requestAnimationFrame(main);
