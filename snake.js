
let direction = {x: 0, y: 0}; 
let speed_s = 1;
let lastPaintTime = 0;
let snake_position = [{x: 10, y: 10}
];
food_segment={x: 13, y: 14};
//Functions
function main(consttime) {
    window.requestAnimationFrame(main);
    console.log(consttime);
    if((consttime - lastPaintTime)/1000 < 1/speed_s){
        return;
    }
   
    lastPaintTime = consttime;
  game_draw();
}


function game_draw(){

    // Show snake - Display
    game_board.innerHTML = ''
    snake_position.forEach(snake_segment =>{
      const  snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = snake_segment.y;
        snakeElement.style.gridColumnStart = snake_segment.x;
        snakeElement.classList.add('snake');


       game_board.appendChild(snakeElement);

    })

    const foodElement=dokument.createElement('div');
    foodElement.style.gridRowStart = food_segment.y;
    foodElement.style.gridColumnStart = food_segment.x;
    foodElement.classList.add('food');
   game_board.appendChild(foodElement);

}

window.requestAnimationFrame(main);