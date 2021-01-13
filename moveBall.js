//creating variables for ball_1
var ball_1 = document.getElementById('ball_1');
var velocity_1 = 100;
var positionX_1 = 0;
var positionY_1 = 100;
var reverse_1 = false;
 
//creating variables for ball_2
var ball_2 = document.getElementById('ball_2');
var velocity_2 = 20;
var positionX_2 = 0;
var positionY_2 = 300;
var reverse_2 = false;

//creating variables for ball_3
var ball_3 = document.getElementById('ball_3');
var velocity_3 = 20;
var positionX_3 = 0;
var positionY_3 = 600;
var reverse_3 = false;

//creating function to get random number between 2 numbers
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//writing a function to change ball_1 properties and make it move
function changeBall_1() {
    var Xmin = 0;
    var Xmax = 1000;
    if (reverse_1 === false) {
        positionX_1  = positionX_1 + velocity_1;
        ball_1.style.left = positionX_1 + 'px';
    } else {
        positionX_1 = positionX_1 - velocity_1;
        ball_1.style.left = positionX_1 + 'px';
    }
    if ((positionX_1 + velocity_1) > Xmax || (positionX_1 - velocity_1) < Xmin) {
        reverse_1 = !reverse_1;
    }
    //generates random velocity
    velocity_1 = getRndInteger(5, 200);
    //generates random color
    ball_1.style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    //generates random number to be number to be used in height and width
    var randomNumber = getRndInteger(5, 100);
    ball_1.style.height = randomNumber + 'px';
    ball_1.style.width = randomNumber + 'px';
    
}
//writing a function to change ball_2 properties and make it move
function changeBall_2() {
    var Xmin = 0;
    var Xmax = 1000;
    if (reverse_2 === false) {
        positionX_2  = positionX_2 + velocity_2;
        ball_2.style.left = positionX_2 + 'px';
    } else {
        positionX_2 = positionX_2 - velocity_2;
        ball_2.style.left = positionX_2 + 'px';
    }
    if ((positionX_2 + velocity_2) > Xmax || (positionX_2 - velocity_2) < Xmin) {
        reverse_2 = !reverse_2;
    }
    //generates random velocity
    velocity_2 = getRndInteger(5, 200);
    //generates random color
    ball_2.style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    //generates random number to be number to be used in height and width
    var randomNumber = getRndInteger(5, 100);
    ball_2.style.height = randomNumber + 'px';
    ball_2.style.width = randomNumber + 'px';
    
}
//writing a function to change ball_2 properties and make it move
function changeBall_3() {
    var Xmin = 0;
    var Xmax = 1000;
    if (reverse_3 === false) {
        positionX_3  = positionX_3 + velocity_3;
        ball_3.style.left = positionX_3 + 'px';
    } else {
        positionX_3 = positionX_3 - velocity_3;
        ball_3.style.left = positionX_3 + 'px';
    }
    if ((positionX_3 + velocity_3) > Xmax || (positionX_3 - velocity_3) < Xmin) {
        reverse_3 = !reverse_3;
    }
    //generates random velocity
    velocity_3 = getRndInteger(5, 200);
    //generates random color
    ball_3.style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    //generates random number to be number to be used in height and width
    var randomNumber = getRndInteger(5, 100);
    ball_3.style.height = randomNumber + 'px';
    ball_3.style.width = randomNumber + 'px';
    
}
//random setInterval for ball_1
setInterval(changeBall_1, getRndInteger(100,5000));

//random setInterval for ball_2
setInterval(changeBall_2, getRndInteger(100,5000));

//random setInterval for ball_3
setInterval(changeBall_3, getRndInteger(100,5000));