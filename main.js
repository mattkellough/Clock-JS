var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#1277F6';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = '#1277F6';

function degToRad(degree) {
  var factor = Math.PI/180;
  return degree*factor;
}

function renderTime() {


  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds+(milliseconds/1000);

  // Background
  gradient = ctx.createRadialGradient(250,250,5,250,250,300);
  gradient.addColorStop(0,'#051F40');
  gradient.addColorStop(1, '#000');
  ctx.fillStyle = gradient;
  // ctx.fillStyle = '#333';
  ctx.fillRect(0,0,500,500);

  // Hours
  ctx.beginPath();
  ctx.arc(250,250,200,degToRad(270),degToRad((hours*30)-90));
  ctx.stroke();

  // Minutes
  ctx.beginPath();
  ctx.arc(250,250,170,degToRad(270),degToRad((minutes*6)-90));
  ctx.stroke();


  // Seconds
  ctx.beginPath();
  ctx.arc(250,250,140,degToRad(270),degToRad((newSeconds*6)-90));
  ctx.stroke();

  // Date
  ctx.font = "25px Avenir";
  ctx.fillStyle = '#E0CAB1';
  ctx.fillText(today, 155, 250);


  // Time
  ctx.font = "15px Avenir";
  ctx.fillStyle = '#E0CAB1';
  ctx.fillText(time, 155, 280);
}

setInterval(renderTime, 40);
