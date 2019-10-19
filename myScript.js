function buttonClicked()
{
  var player1= rollRandomNumber();
  var player2= rollRandomNumber();

  changePicture(player1, player2);
  changeWinnerTitle(calculateResult(player1,player2));


}
function calculateResult(player1, player2)
{
  var result;
  if (player1 > player2) {
    result="Player 1 wins!";
  }
  else if (player2 > player1) {
    result= "Player 2 wins! ";
  }
  else{
    result = "Its a tie !";
  }
  return result;
}
function rollRandomNumber()
{
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function changePicture(player1, player2)
{

  document.getElementById("player1").src= selectPicture(player1);
  document.getElementById("player2").src= selectPicture(player2);

}

function selectPicture(player)
{
  var picturePath;
  switch (player) {
      case 1:
      picturePath="images/dice1.png";
      break;
      case 2:
      picturePath="images/dice2.png";
      break;
      case 3:
      picturePath="images/dice3.png";
      break;
      case 4:
      picturePath="images/dice4.png";
      break;
      case 5:
      picturePath="images/dice5.png";
      break;
      case 6:
      picturePath="images/dice6.png";
      break;
  }

  return picturePath;
}
function changeWinnerTitle(result)
{
  document.querySelector("h1").innerHTML= result;
}
