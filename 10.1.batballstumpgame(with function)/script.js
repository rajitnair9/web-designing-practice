function Cricket(myChoice){
    var myresult=document.getElementById('result');
    var randomNumber=Math.floor(Math.random() * 3) + 1;
    var computerChoice;
    myresult.innerHTML=`You have chosen ${myChoice} <br><br>`;
    if (randomNumber === 1){
        computerChoice = 'Bat';
    } else if (randomNumber === 2){
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }
    myresult.innerHTML+=`Computer choice is ${computerChoice} <br><br>`;

    if (myChoice == 'Bat') {
        if (computerChoice == 'Ball') {
            myresult.innerHTML+='User won<br><br>';
        } else if (computerChoice == 'Stump') {
            myresult.innerHTML+='User lost<br><br>';
        }
    } else if (myChoice == 'Ball') {
        if (computerChoice == 'Bat') {
            myresult.innerHTML+='User lost<br><br>';
        } else if (computerChoice == 'Stump') {
            myresult.innerHTML+='User won<br><br>';
        }
    } else if (myChoice == 'Stump') {
        if (computerChoice == 'Bat') {
            myresult.innerHTML+='User won<br><br>';
        } else if (computerChoice == 'Ball') {
            myresult.innerHTML+='User lost<br><br>';
        }
    }
    if (myChoice == computerChoice) {
        myresult.innerHTML+='Tie<br><br>';
    }
}