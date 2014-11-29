int count = 0;
color c1 = #FFFFFF;
color c2 = #FFE9C4;
color c3 = #D4FBFF;
float X, Y, Z, pX, pY, pZ, r,radius,xpos,ypos,zpos,c;
boolean rectOver;
boolean newC;
Sphere[] arrayOfSpheres;

void setup()
{
  size(1600, 1400, P3D);
  background(0,0,0,0);
  noStroke();
 
  lights();
 
   
 
  for(int i=0; i<=100; i=i+1){
    radius = random(3, 5);
    c = random(1, 4);

  if (c <= 2) {
    fill(c1);
  } else if (c <= 3) {
    fill(c2);
  } else {
    fill(c3);
  }
  
  xpos = random(0, 800);
  ypos = random(0, 700);
  zpos = random(0);
  
  arrayOfSpheres = new Sphere[10];
  arrayOfSpheres[i] = new Sphere(xpos,ypos,zpos,radius,c1);
  }
  
  for (int i = 0; i < arrayOfSpheres.length; i++) {
    arrayOfSpheres[i].display();
  }
  
}

void draw() {
  
  noStroke();
  
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
  pZ = random(0,1000);

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
  Z = random(0,1000);
}

void keyPressed(){
   count=0;
}


