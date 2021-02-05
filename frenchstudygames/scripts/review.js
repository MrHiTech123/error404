review = function(p) {
  var reviewscreen;
  p.setup = function() {
    reviewscreen = p.createCanvas(250, 250)
    reviewscreen.parent('study')
    p.background(0, 255, 255);
    p.stroke(100, 0, 255);
    p.fill(255, 255, 0);
    p.strokeWeight(0.75)
  }
  var reviewX = 0;
  var reviewY = 0;
  var rotation = 0;
  p.draw = function() {
      p.translate(125, 125);
      p.rotate(p.radians(rotation));
      rotation += 1;
      p.triangle(reviewX, reviewY + 25, reviewX + 50, reviewY, reviewX + 50, reviewY + 50);
      p.rect(reviewX + 50, reviewY + 15, 50, 20);
  };}
var myp6 = new p5(review);