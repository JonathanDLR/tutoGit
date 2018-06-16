function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(250, 0);
  ctx.lineWidth = 15;
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(250, 0);
  ctx.lineTo(275,125);
  ctx.lineWidth = 5;
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 140);
  ctx.lineTo(280,125);
  ctx.lineWidth = 5;
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0,140);
  ctx.lineWidth = 10;
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

document.onload = draw();
