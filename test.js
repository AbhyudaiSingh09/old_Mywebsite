var count = document.querySelector('.count');
var counter = 0;
var interval = setInterval(function(){
  counter++;
  count.textContent = counter;
  if (counter >= 160000) {
     clearInterval(interval);
  }
}, 0.000001);
