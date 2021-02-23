class Game{
    constructor(){

    }
   getState(){
       var gamestateref = database.ref("gamestate");
       gamestateref.on('value', function(data){
           gamestate=data.val();
       })
   }
   update(state){
       database.ref('/').update({
           gamestate:state
       })
   }
   start(){
       if(gamestate===0){
           form=new Form();
           form.display();
           player=new Player();
           player.getCount()
       }
   }
   play(){
       form.hide();
       textSize(24);
       text("Game Start" ,150,100)
       Player.getPlayerInfo();
       if(allPlayers!==undefined){
           var tp=130;
           for(var plr in allPlayers){
               if(plr==="player" + player.index){
                    fill("red");
               }else{
                   fill("black");
               }
           }
           tp=tp+20;
           textSize(16);
           text(allPlayers[plr].name+ ":" + allPlayers[plr].distance, 130,tp);
       }
       if(keyDown(UP_ARROW)&& player.index!==null){
           player.distance+=50;
           player.update();
       }
   }
}