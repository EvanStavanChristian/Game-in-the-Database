var database;
var gamestate=0;
var playercount;
var form, player, game;
var allPlayers;

function setup(){
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
    
    if(playercount===4){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();
    }

}

