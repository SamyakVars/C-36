var database;

var gameState = 0
var playerCount = 0

var form, player, game;

function setup(){
    createCanvas(400,400);

    database = firebase.database()

    game = new Game()
    game.getState()
    game.start()




}

function draw(){
    background("white");

    // if(keyDown(LEFT_ARROW)){
    //     writePos(-1,0);
    // }
    // else if(keyDown(RIGHT_ARROW)){
    //     writePos(1,0);
    // }
    // else if(keyDown(UP_ARROW)){
    //     writePos(0,-1);
    // }
    // else if(keyDown(DOWN_ARROW)){
    //     writePos(0,+1);
    // }

    // if(keyCode == 119){
    //     writePosition(0, -1)
    // }else if(keyCode == 115){
    //     writePosition(0, +1)
    // }else if(keyCode == 97){
    //     writePosition(-1, 0)
    // }else if(keyCode == 100){
    //     writePosition(1, 0)
    // }
    drawSprites();
}

function writePos(x,y){
    database.ref('ball2/position2').set({
        'x' : position2.x + x,
        'y' : position2.y + y
    })
   
}

function showError() {
    console.log("There is an error that is occuring")
}

function readPosition(data){

    position = data.val()
    ball.x = position.x
    ball.y = position.y


}



