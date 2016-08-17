var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

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

  // Background


  // Hours
  ctx.beginPath();
  ctx.arc(250,250,200,degToRad(270),degToRad((hours*30)-90));
  ctx.stroke();

  // Minutes


  // Seconds


  // Date


  // Time
}

renderTime();
