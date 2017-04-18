$(document).ready(function(){
  
  var playerTurn = "x";
  var compTurn = "o";
  var gameStart = false;
  var count = 0; //count number of possible turns
  var overallTurns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  
  $("#turnX").click(function(){
    
    playerTurn = "o";
    compTurn = "x";
    
    $("#turnO").addClass("btn-primary");
    //console.log("class added");
    $("#turnX").removeClass("btn-primary");
    //console.log("class removed");
    reset();
    
  });
  
    $("#turnO").click(function(){
      
    playerTurn = "x";
    compTurn = "o";
      
    $("#turnX").addClass("btn-primary");
    //console.log("class added");
    $("#turnO").removeClass("btn-primary");
    //console.log("class removed");
    reset();
    
  });
  
  
  function calcComputer(){
    var taken = false;
    //max 5 turns on any side
    while (taken === false && count !== 5){
      var compMove = (Math.random()*10).toFixed();
      var moveSlot = $("#" + compMove).text();
      //takes in computer's number generated. then selects the #NUM from the HTML. if the moveslot occupy is a "#" 
      if(moveSlot === "#"){
        //makes the #NUM into whatever variable the computer's turn is
        $("#" + compMove).text(compTurn)
        taken = true;
        overallTurns[compMove] = compTurn;
      
      }
    }
  }
  
  
  
  function calcPlayer(turn, id){
    
    var locOccupy = $("#"+id).text();
    
    //console.log(locOccupy);
    
    if(locOccupy === "#"){
      count++;
      overallTurns[id] = turn;
      $("#"+id).text(turn);
      checkWin(overallTurns, turn);
      
      if(gameStart === false){
        calcComputer();
        checkWin(overallTurns, compTurn);
      }
      
    }
  }
  
  function checkWin(recordedTurns, thisTurn){
    if(recordedTurns[0] === thisTurn && recordedTurns[1] === thisTurn && recordedTurns[2] === thisTurn){
      gameStart = true;
      reset();
      alert("Player " + thisTurn + " won the game (top row)");
    }
    
    else if(recordedTurns[3] === thisTurn && recordedTurns[4] === thisTurn && recordedTurns[5] === thisTurn){
      gameStart = true;
      reset();
      alert("Player " + thisTurn + " won the game (middle row)");
    }
    
    else if(recordedTurns[6] === thisTurn && recordedTurns[7] === thisTurn && recordedTurns[8] === thisTurn){
      gameStart = true;
      reset();
      alert("Player " + thisTurn + " won the game (bottom row)");
    }
    
    else if(recordedTurns[0] === thisTurn && recordedTurns[3] === thisTurn && recordedTurns[6] === thisTurn){
      gameStart = true;
      reset();
      alert("Player " + thisTurn + " won the game (left column row)");
    }
    
    else if(recordedTurns[1] === thisTurn && recordedTurns[4] === thisTurn && recordedTurns[7] === thisTurn){
      gameStart = true;
      reset();
      alert("Player " + thisTurn + " won the game (middle column)");
    }
    
    else if(recordedTurns[2] === thisTurn && recordedTurns[5] === thisTurn && recordedTurns[8] === thisTurn){
      gameStart = true;
      reset();
      alert("Player " + thisTurn + " won the game (right column)");
    }
    
    else if(recordedTurns[0] === thisTurn && recordedTurns[4] === thisTurn && recordedTurns[8] === thisTurn){
      gameStart = true;
      reset();
      alert("Player " + thisTurn + " won the game (left diagonal)");
    }
    
    else if(recordedTurns[2] === thisTurn && recordedTurns[4] === thisTurn && recordedTurns[6] === thisTurn){
      gameStart = true;
      reset();
      alert("Player " + thisTurn + " won the game (right diagonal)");
    }
    
    else{
      gameStart = false;
    }
  }
  
  $(".tic").click(function(){
    
    var testHold = $(this).attr('id');
    calcPlayer(playerTurn, testHold);
    
  });
  
  function reset(){
    overallTurns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".tic").text("#");
    gameStart = false;
  }
  
  
  
  
});