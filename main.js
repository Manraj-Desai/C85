canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var NASA_array = ["nasa_1.jpg", "nasa_2.jpg", "nasa_3.jpg", "nasa_4.jpg"];

random_num = Math.floor(Math.random() * 4);

rover_width = 100;
rover_height = 90;

background_image = NASA_array[random_num];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    key_pressed = e.keyCode;
    if(key_pressed == '37') {
        left();
        console.log("left");
    }
    
    if(key_pressed == '38') {
        up();
        console.log("up");

    }
    
    if(key_pressed == '39') {
        right();
        console.log("right");

    }
    
    if(key_pressed == '40') {
        down();
        console.log("down");
    }
}

function up() {
    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("x = " + rover_x + ",y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("x = " + rover_x + ",y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("x = " + rover_x + ",y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("x = " + rover_x + ",y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}