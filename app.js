"use strict"

function clickReaction() {
    document.getElementById("reaction").innerHTML = `Your reaction time is THIS`;
}


setTimeout(appearObject, +(1000 * Math.round((Math.random()*(8-3)+3)*100)/100));

function appearObject() {
    
    let rep = +Math.round(Math.random()*(20-5)+5);
    let rep1 = rep + "rem";
    
    document.getElementById("object").style.left = rep1 ;
    document.getElementById("object").style.top = rep1 ;
    document.getElementById("object").style.display = "block";

}

function appearObjectq() {
    
    
    //document.getElementById("object").style.display = "none";

}
