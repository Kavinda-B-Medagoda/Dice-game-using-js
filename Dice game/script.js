
var nsp1 = document.getElementById("nsp1");
var nsp2 = document.getElementById("nsp2");
var tsp1 = document.getElementById("tsp1");
var tsp2 = document.getElementById("tsp2");
var tdp1 = document.getElementById("tdp1");
var tdp2 = document.getElementById("tdp2");
var im1 = document.getElementById("im1");
var im2 = document.getElementById("im2");
var im3 = document.getElementById("im3");
var im4 = document.getElementById("im4");


document.getElementById("newgame").addEventListener("click", function(){
    totalp1 = 0;
    totalp2 = 0;
    nsp1.innerText = 0;
    nsp2.innerText = 0;
    tsp1.innerText = 0;
    tsp2.innerText = 0;
    im1.src = "";
    im2.src = "";
    im3.src = "";
    im4.src = "";
    tdp1.removeAttribute('disabled');
    tdp2.removeAttribute('disabled');
    tdp1.setAttribute('value', 'Throw Dice');
    tdp2.setAttribute('value', 'Throw Dice');
    tdp1.style.backgroundColor = "rgb(43, 58, 104)";
    tdp2.style.backgroundColor = "rgb(43, 58, 104)";

})

tdp1.addEventListener("click", function(){
    var dice1 = Math.floor(Math.random() * 6)+ 1; 
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var td = dice1+dice2;

    im1.src = "dice_" + dice1 + ".png";
    im1.style.display = "inline";
    im1.style.width = "80px";
    im2.src = "dice_" + dice2 + ".png";
    im2.style.display = "inline";
    im2.style.width = "80px";
    
    nsp1.innerText = td;

    if(dice1 != dice2){
        tdp1.style.backgroundColor = "rgb(58, 169, 134)";
        tdp1.setAttribute('value', 'next player');
        tdp1.setAttribute('disabled', '');
        tdp2.removeAttribute('disabled');
        tdp2.setAttribute('value', 'Throw Dice');
        tdp2.style.backgroundColor = "rgb(43, 58, 104)";
        totalp1 = totalp1 + td;
        tsp1.innerText = totalp1;
          
    }
    else if(dice1 == 1 && dice2 == 1){
        tsp1.innerText = "0";
        alert("Player 1 lose his Total score, Better luck next time");
    }
    else{
        alert("Player 1 got a another chance to throw the dices");
        tsp2.value = tsp2.vale + nsp2.value;
        totalp1 = totalp1 + td;
        tsp1.innerText = totalp1;

    }



    if(totalp1>=100){
        alert("Player 1 won the game!!!");
        tdp1.style.backgroundColor = "rgb(43, 58, 104)";
        tdp1.setAttribute('value', 'Click New game');

    }


})

tdp2.addEventListener("click", function(){
    var dice1 = Math.floor(Math.random() * 6)+ 1; 
    var dice2 = Math.floor(Math.random() * 6) + 1; 
    var td = dice1+dice2;

    im3.src = "dice_" + dice1 + ".png";
    im3.style.display = "inline";
    im3.style.width = "80px";
    im4.src = "dice_" + dice2 + ".png";
    im4.style.display = "inline";
    im4.style.width = "80px";
    
    nsp2.innerText = td;


    if(dice1 != dice2){
        tdp2.style.backgroundColor = "rgb(58, 169, 134)";
        tdp2.setAttribute('value', 'next player');
        tdp2.setAttribute('disabled', '');
        tdp1.removeAttribute('disabled');
        tdp1.setAttribute('value', 'Throw Dice');
        tdp1.style.backgroundColor = "rgb(43, 58, 104)";
        totalp2 = totalp2 + td;
        tsp2.innerText = totalp2;


               
    }
    else if(dice1 == 1 && dice2 == 1){
        tsp1.innerText = "0";
        alert("Player 2 lose his Total score, Better luck next time");
    }
    else{
        alert("Player 2 got a another chance to throw the dices");
        tsp2.value = tsp2.vale + nsp2.value;
        totalp2 = totalp2 + td;
        tsp2.innerText = totalp2;

    }

    if(totalp2>=100){
        alert("Player 2 won the game!!!");
        tdp2.style.backgroundColor = "rgb(43, 58, 104)";
        tdp2.setAttribute('value', 'Click New game');
    }


})
      


