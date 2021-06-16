var thunder_img_1,thunder_img_2,thunder_img_3,thunder_img_4;
var walking_img_1,walking_img_2,walking_img_3,walking_img_4;
var walking_img_5,walking_img_6,walking_img_7,walking_img_8;

//  const Engine = Matter.Engine;
//  const World= Matter.World;
//  const Bodies = Matter.Bodies;
//  const Constraint = Matter.Constraint;

function preload(){
    // Loading images for the variables;
    thunder_img_1=loadImage('images/thunder_1.png');
    thunder_img_2=loadImage('images/thunder_2.png');
    thunder_img_3=loadImage('images/thunder_3.png');
    thunder_img_4=loadImage('images/thunder_4.png');

    walking_img_1=loadImage('images/walking_1.png');
    walking_img_2=loadImage('images/walking_2.png');
    walking_img_3=loadImage('images/walking_3.png');
    walking_img_4=loadImage('images/walking_4.png'); 
    walking_img_5=loadImage('images/walking_5.png'); 
    walking_img_6=loadImage('images/walking_6.png'); 
    walking_img_7=loadImage('images/walking_7.png');
    walking_img_8=loadImage('images/walking_8.png');

}


function setup(){
    createCanvas(1000, 600);
    // engine = Engine.create();
    // World = engine.world;


    
}

function draw(){
    drawSprites();
}