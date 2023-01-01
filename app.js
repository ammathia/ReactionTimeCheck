"use strict"


window.onload = setTimeout(appearObject, +(1000 * Math.round((Math.random()*(10-5)+5)*100)/100));


function appearObject() {
    
    let rep = +Math.round(Math.random()*(20-5)+5);
    let rep1 = rep + "rem";
    let rip = +Math.round(Math.random()*(20-5)+5);
    let rip1 = rip + "rem";
    
    let start = Date.now();
    document.getElementById("object").style.left = rep1 ;
    document.getElementById("object").style.top = rip1 ;
    document.getElementById("object").style.display = "block";

}

function disappear() {
    
    document.getElementById("object").style.display = "none";
    let end = Date.now();
    let clickedTime = (start - end)/1000;
    alert(clickedTime);
    document.getElementById("reaction").innerHTML = "Your reaction time is " + clickedTime; 
    setTimeout(appearObject, +(1000 * Math.round((Math.random()*(10-5)+5)*100)/100));

}
