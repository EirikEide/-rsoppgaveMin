var clickbuttonEl = document.getElementById("clickbutton");
var utskriftEl = document.getElementById("utskrift");
var oppgradering1El = document.getElementById("oppgradering1");
var oppgradering2El = document.getElementById("oppgradering2");

clickbuttonEl.addEventListener("click", countClick);
oppgradering1El.addEventListener("click", increasePoengPerClickMed1)
oppgradering2El.addEventListener("click", increasePoengPerClickMed10)


var antallClick = 0;
var poengPerClick = 1;

function countClick(e) {
    antallClick = antallClick + poengPerClick;
    utskriftEl.innerHTML = "You have " + antallClick + " cookies";
}

function increasePoengPerClickMed1(e) {
    if(antallClick >= 100){
        antallClick = antallClick - 100;
        poengPerClick++;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have bought an uppgrade and you now have " + antallClick + " cookies left";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}

function increasePoengPerClickMed10(e) {
    if(antallClick >= 800){
        antallClick = antallClick - 800;
        poengPerClick = poengPerClick + 10;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have bought an uppgrade and you now have " + antallClick + " cookies left";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}