var text = "a";
var fontsize = 30;

// Get Canvas2DContext
var canvas = document.querySelector('#keyboard');
var ctx = canvas.getContext("2d");

// Text attributes
ctx.font = fontsize + 'pt Calibri Bold';
ctx.textAlign = 'center';
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.fillStyle = 'black';


CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  x = x - (fontsize * 1.2);
  y = y - fontsize;
  this.beginPath();
  this.moveTo(x+r, y);
  this.arcTo(x+w, y,   x+w, y+h, r);
  this.arcTo(x+w, y+h, x,   y+h, r);
  this.arcTo(x,   y+h, x,   y,   r);
  this.arcTo(x,   y,   x+w, y,   r);
  this.closePath();
  return this;
}
var position1 = { x: 160, y: 160};
var smallKey = {x: (2.4 * fontsize), y: (4 * fontsize / 3)};
// draw "a"
ctx.fillText(text, position1.x, position1.y );

// put key shape around it
ctx.roundRect(position1.x, position1.x, smallKey.x, smallKey.y, 10).stroke(); //or .fill() for a filled rect


document.addEventListener('keyup', function (e) {
    console.log(e.which);
    
});