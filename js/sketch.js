"use strict";
let angle=0;
let speed=0.05;
let scalar=100;
function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    let x=width/2+sin(angle)*scalar;
    let y=height/2+cos(angle)*scalar;
    ellipse(x,y,25,25);
    angle+=speed;

}