int count = 0;
color c1 = #FFFFFF;
color c2 = #FFE9C4;
color c3 = #D4FBFF;
float X, Y, pX, pY, r,radius,xpos,ypos,c;
boolean rectOver;
boolean newC;


void setup()
{
  size(1600, 1400);
  background(0,0,0,0);
  noStroke();
 
  for(int i=0; i<=300; i=i+1){
  radius = random(3, 5);
  c = random(1, 4);

  if (c <= 2) {
    fill(c1);
  } else if (c <= 3) {
    fill(c2);
  } else {
    fill(c3);
  }
  
  xpos = random(0, 1500);
  ypos = random(0,1400);
  
  ellipse(xpos, ypos, radius, radius);
  }
}

void draw() {
  
  noStroke();
  fill(0,0,0,0);
  rect(0,0,60,30);
  
  fill(color(c1)); 
  
  float r = random(3, 5);
  float x = random(1, 4);

  if (x <= 2) {
    fill(c1);
  } else if (x <= 3) {
    fill(c2);
  } else {
    fill(c3);
  }
  
  if(mousePressed == true){    
    if(count < 1){
       count++;
    }
    else{
       stroke(255, 80);
       strokeWeight(1);
       fill(230,231,232,255);
       line(pX, pY, X, Y); 
    }
    mousePressed = false;
  }


}

void mousePressed() {  
  float r = random(3, 5);
  float x = random(1, 4);

  pX = pmouseX;
  pY = pmouseY;

  if (x <= 2) {
    fill(c1);
  } else if (x <= 3) {
    fill(c2);
  } else {
    fill(c3);
  }
  
  ellipse(mouseX, mouseY, r, r);
 
}

void mouseReleased(){
  X = mouseX;
  Y = mouseY;
}

void keyPressed(){
   count=0;
}
