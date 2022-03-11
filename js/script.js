var clickbuttonEl = document.getElementById("clickbutton");
var utskriftEl = document.getElementById("utskrift");
var oppgradering1El = document.getElementById("oppgradering1");
var oppgradering2El = document.getElementById("oppgradering2");
var oppgradering3El = document.getElementById("oppgradering3");
var oppgradering4El = document.getElementById("oppgradering4");
var oppgradering5El = document.getElementById("oppgradering5");
var oppgradering6El = document.getElementById("oppgradering6");
var oppgradering7El = document.getElementById("oppgradering7");
var oppgradering8El = document.getElementById("oppgradering8");
var oppgradering9El = document.getElementById("oppgradering9");
var oppgradering10El = document.getElementById("oppgradering10");
var oppgradering11El = document.getElementById("oppgradering11");

clickbuttonEl.addEventListener("click", countClick);
oppgradering1El.addEventListener("click", increasePoengPerClickMed1)
oppgradering2El.addEventListener("click", increasePoengPerClickMed10)
oppgradering3El.addEventListener("click", increasePoengPerClickMed150)
oppgradering4El.addEventListener("click", increasePoengPerClickMed5000)
oppgradering5El.addEventListener("click", increasePoengPerClickMed200000)
oppgradering6El.addEventListener("click", increasePoengPerClickMed90000000)
oppgradering7El.addEventListener("click", increasePoengPerClickMed1000000000)
oppgradering8El.addEventListener("click", increasePoengPerClickMed50000000000)
oppgradering9El.addEventListener("click", increasePoengPerClickMed4000000000000)
oppgradering10El.addEventListener("click", increasePoengPerClickMed9000000000000000)
oppgradering11El.addEventListener("click", increasePoengPerClickMed900000000000000000)



var antallClick = 100000;
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
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
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
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}

function increasePoengPerClickMed150(e) {
    if(antallClick >= 8000){
        antallClick = antallClick - 8000;
        poengPerClick = poengPerClick + 150;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}

function increasePoengPerClickMed5000(e) {
    if(antallClick >= 250000){
        antallClick = antallClick - 250000;
        poengPerClick = poengPerClick + 5000;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}

function increasePoengPerClickMed200000(e) {
    if(antallClick >= 7000000){
        antallClick = antallClick - 7000000;
        poengPerClick = poengPerClick + 200000;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}

function increasePoengPerClickMed90000000(e) {
    if(antallClick >= 500000000){
        antallClick = antallClick - 500000000;
        poengPerClick = poengPerClick + 90000000;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}


function increasePoengPerClickMed1000000000(e) {
    if(antallClick >= 35000000000){
        antallClick = antallClick - 35000000000;
        poengPerClick = poengPerClick + 1000000000;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}

function increasePoengPerClickMed50000000000(e) {
    if(antallClick >= 6000000000000){
        antallClick = antallClick - 6000000000000;
        poengPerClick = poengPerClick + 50000000000;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}

function increasePoengPerClickMed4000000000000(e) {
    if(antallClick >= 10000000000000000){
        antallClick = antallClick - 10000000000000000;
        poengPerClick = poengPerClick + 4000000000000;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}

function increasePoengPerClickMed9000000000000000(e) {
    if(antallClick >= 5000000000000000000){
        antallClick = antallClick - 5000000000000000000;
        poengPerClick = poengPerClick + 9000000000000000;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}

function increasePoengPerClickMed900000000000000000(e) {
    if(antallClick >= 30000000000000000000000){
        antallClick = antallClick - 30000000000000000000000;
        poengPerClick = poengPerClick + 900000000000000000;
        //clickbuttonEl.innerHTML = "+" + poengPerClick;
        antallPerClick.innerHTML = "You make " + poengPerClick + " cookies per click";
        utskriftEl.innerHTML = "You have " + antallClick + " cookies";
    }else {
        alert("You do not have enough cookies to buy this upgrade")
    }

}