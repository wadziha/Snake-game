let vstupni_souradnice = {x: 0, y: 0};
let rychlost_hada = 10;
let skore = 0;
let cas_posledni_vykresleni = 0;
let snake_pozice = [{x: 19, y: 11}];

var aktualni_jmeno_hrace = null

function nastav_hrace(jmeno) {
    aktualni_jmeno_hrace = jmeno
    aktualni_Hrac.innerHTML = "Hráč: " + jmeno
}

function main(aktualni_cas) {
    window.requestAnimationFrame(main);
    // console.log(aktualni_cas)
    if ((aktualni_cas - cas_posledni_vykresleni) / 1000 < 1 / rychlost_hada) {
        return;
    }
    cas_posledni_vykresleni = aktualni_cas;
    game_draw();
}


function pokud_se_srazi(snake) {
    // pokud narazi had sam na sebe 
    for (let i = 1; i < snake_pozice.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // pokud narazi had do zdi
    if (snake[0].x >= 25 || snake[0].x <= 0 || snake[0].y >= 25 || snake[0].y <= 0) {
        return true;
    }

    return false;
}
function game_draw(){
// 
if (pokud_se_srazi(snake_pozice)) {
    vstupni_souradnice = {x: 0, y: 0};
    alert("Game Over!'");
    snake_pozice = [{x: 11, y: 11}];
    skore = 0;
}

// jestlize had sni jidlo, zvysujeme skore a vygenerujese nove pozice jidla 
if (snake_pozice[0].y === jidlo.y && snake_pozice[0].x === jidlo.x) {
    skore += 1;
    if (skore > nejvyssi_skore) {
        nejvyssi_skore = skore;
        localStorage.setItem("nej_skore", JSON.stringify({
            player: aktualni_jmeno_hrace,
            nejvyssi_skore: nejvyssi_skore
        }));
        nej_hrac.innerHTML = "Hráč s nejlepším skóre: " + aktualni_jmeno_hrace;
        nej_vysledek.innerHTML = "Nejlepší skóre: " + nejvyssi_skore;
    }
    aktualni_skore.innerHTML = "Skóre: " + skore;
    snake_pozice.unshift({x: snake_pozice[0].x + vstupni_souradnice.x, y: snake_pozice[0].y + vstupni_souradnice.y});
    let a = 2;
    let b = 23;
    jidlo = {x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random())}
}

//pohyb hada 
for (let i = snake_pozice.length - 2; i >= 0; i--) {
    snake_pozice[i + 1] = {...snake_pozice[i]};
}


snake_pozice[0].x += vstupni_souradnice.x;
snake_pozice[0].y += vstupni_souradnice.y;

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
//po nacteni stranky si pricteme data (nejvyssi skore) z localStorache
let nej_skore = localStorage.getItem("nej_skore");
if (nej_skore === null) {
    nejvyssi_skore = 0;
    localStorage.setItem("nej_skore", JSON.stringify({
        player: aktualni_jmeno_hrace,
        nejvyssi_skore: nejvyssi_skore
    }))
} else {
    const data = JSON.parse(nej_skore);
    nejvyssi_skore = data.nejvyssi_skore;
    nej_hrac.innerHTML = "Hráč s nejlepším skóre: " + data.player;
    nej_vysledek.innerHTML = "Nejlepší skóre: " + data.nejvyssi_skore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {

    if (aktualni_jmeno_hrace == null) {
        return
    }

    // Hra zacina 
    vstupni_souradnice = {x: 0, y: 1} 

    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            vstupni_souradnice.x = 0;
            vstupni_souradnice.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            vstupni_souradnice.x = 0;
            vstupni_souradnice.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            vstupni_souradnice.x = -1;
            vstupni_souradnice.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            vstupni_souradnice.x = 1;
            vstupni_souradnice.y = 0;
            break;
        default:
            break;
    }
});
