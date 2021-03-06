/* eslint-disable no-param-reassign */

export default function sketch(p) {
  const startingRadius = 200;
  let radiusAllowed = startingRadius;

  p.setup = function () {
    p.createCanvas(600, 400);
  };

  p.draw = function () {
    p.stroke(0);
    p.noFill();
    p.background(255);
	  drawCircle(p.width / 2, p.height / 2, 200);
  };

  function drawCircle(x, y, radius) {
    p.ellipse(x, y, radius, radius);
    if (radius <= radiusAllowed || radius < 2) {
      return;
    }
    drawCircle(x + radius / 2, y, radius / 2);
    drawCircle(x - radius / 2, y, radius / 2);
  }

  p.mousePressed = function (e) {
    if (e.target.tagName === 'CANVAS') {
      radiusAllowed = radiusAllowed / 2;
    }
  };

  p.mouseDragged = function (e) {
    if (e.target.tagName === 'CANVAS') {
      radiusAllowed = startingRadius;
    }
  };
}
