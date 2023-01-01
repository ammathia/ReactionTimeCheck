"use strict"


window.onload = setTimeout(appearObject, +(1000 * Math.round((Math.random()*(10-5)+5)*100)/100));

let start;
let end;

let colors = ["white", "black", "red", "green", "yellow", "blue"];

function appearObject() {
    
    let rep = +Math.round(Math.random()*(20-5)+5);
    let rep1 = rep + "rem";
    let rip = +Math.round(Math.random()*(20-5)+5);
    let rip1 = rip + "rem";

    let colorRandom = +Math.round(Math.random()*(5-0)+0);
    
    start = Date.now();
    
    document.getElementById("object").style.color = rep1 ;
    document.getElementById("object").style.left = rep1 ;
    document.getElementById("object").style.top = rip1 ;
    document.getElementById("object").style.display = "block";

}

function disappearObject() {
    
    document.getElementById("object").style.display = "none";
    end = Date.now();
    let clickedTime = (end - start)/1000;
    document.getElementById("reaction").innerHTML = "Your reaction time is " + clickedTime; 
    setTimeout(appearObject, +(1000 * Math.round((Math.random()*(10-5)+5)*100)/100));

}
