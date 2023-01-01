"use strict"


window.onload = setTimeout(appearObject, +(1000 * Math.round((Math.random() * (10 - 5) + 5) * 100) / 100));

let start;
let end;

let colors = ["white", "black", "red", "green", "yellow", "blue"];

function appearObject() {

    let rep = +Math.round(Math.random() * (20 - 5) + 5);
    let rip = +Math.round(Math.random() * (20 - 5) + 5);
    let widthRandom = +Math.round(Math.random() * (10 - 1) + 1);
    let heightRandom = +Math.round(Math.random() * (10 - 1) + 1);
    let colorRandom = +Math.round(Math.random() * (5 - 0) + 0);
    let borderRadius = +Math.round(Math.random() * (6 - 0) + 0);

    start = Date.now();

    document.getElementById("object").style.borderRadius = borderRadius + "rem";
    document.getElementById("object").style.width = widthRandom + "rem";
    document.getElementById("object").style.height = heightRandom + "rem";
    document.getElementById("object").style.backgroundColor = colors[colorRandom];
    document.getElementById("object").style.left = rep + "rem";
    document.getElementById("object").style.top = rip + "rem";
    document.getElementById("object").style.display = "block";

}

function disappearObject() {

    document.getElementById("object").style.display = "none";
    end = Date.now();
    let clickedTime = (end - start) / 1000;
    document.getElementById("reaction").innerHTML = "Your reaction time is " + clickedTime;
    setTimeout(appearObject, +(1000 * Math.round((Math.random() * (10 - 5) + 5) * 100) / 100));

}
