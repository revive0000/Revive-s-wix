{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let particles = [];\
\
function setup() \{\
  let canvas = createCanvas(windowWidth, windowHeight);\
  canvas.parent('canvasContainer');\
  for (let i = 0; i < 1000; i++) \{\
    particles.push(new Particle());\
  \}\
\}\
\
function draw() \{\
  background(0, 10); // Slight background transparency for trail effect\
  particles.forEach(p => \{\
    p.update();\
    p.show();\
  \});\
\}\
\
class Particle \{\
  constructor() \{\
    this.position = createVector(random(width), random(height));\
    this.velocity = createVector(0, 0);\
    this.acceleration = createVector(0, 0);\
    this.maxSpeed = 2;\
  \}\
\
  update() \{\
    let mouse = createVector(mouseX, mouseY);\
    let force = p5.Vector.sub(mouse, this.position);\
    let distance = force.mag();\
    distance = constrain(distance, 1, 50);\
    force.normalize();\
    force.mult(5 / distance); // Adjust force based on distance\
    this.acceleration = force;\
    this.velocity.add(this.acceleration);\
    this.velocity.limit(this.maxSpeed);\
    this.position.add(this.velocity);\
  \}\
\
  show() \{\
    noStroke();\
    fill(255, 150);\
    ellipse(this.position.x, this.position.y, 2);\
  \}\
\}\
\
function windowResized() \{\
  resizeCanvas(windowWidth, windowHeight);\
\}\
}