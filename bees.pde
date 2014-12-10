float acc = .05;
float vel = .4;
float z_limit = 6;
int size = 60;
 
Bee bees[] = new Bee[size];

void setup()
{
  size(1500, 800);
  smooth();
   
  for(int i = 0; i<bees.length; i++)
  {
    bees[i] = new Bee(7,random(width),random(height),random(0, 15));
  }
}
 
void draw()
{
  background(255,255,255,0);
  noStroke();
   
  for(int i = 0; i < bees.length; i++)
  {
    bees[i].change_momentum();
    bees[i].move();
    bees[i].display();
  }
}

 
class Bee
{
  int diameter;
  float x, y, z;
  float dx, dy, dz;
   
  Bee(int D, float X, float Y, float Z)
  {
    diameter = D;
    x = X;
    y = Y;
    z = Z;
    dx = random(-vel,vel);
    dy = random(-vel,vel);
    dz = random(-vel,vel);
  }
   
  void move()
  {
    x += dx;
    y += dy;
    z += dz;
     
    if(x > width) {x = width; dx = 0;}
    if(x < 0) {x = 0; dx = 0;}
    if(y > height) {y = height; dy = 0;}
    if(y < 0) {y = 0; dy = 0;}
    if(z > size) {z = size; dz = 0;}
    if(z < size) {z = size; dz = 0;}
  }
   
  void change_momentum()
  {
    dx += random(-acc, acc);
    dy += random(-acc, acc);
    dz += random(-acc, acc);
   
    if(dx >  vel) dx =  vel;
    if(dx < -vel) dx = -vel;
    if(dy >  vel) dy =  vel;
    if(dy < -vel) dy = -vel;
    if(dz >  vel) dz =  vel;
    if(dz < -vel) dz = -vel;
  }
   
  void display()
  {
    noStroke();
    fill(random(200,255));
    ellipse (x+2, y-2, 10, random(30));
    fill(255,219,13);
    ellipse (x, y, 15, 10);
  }
}
 

