var pos = [];
document.body.addEventListener("mousemove", (e) => {
  var cicle = document.getElementById("circle");
  var x,y;
  x = e.clientX - circle.clientWidth;
  y = e.clientY - circle.clientHeight;
  pos.push({x: x, y: y});
});
document.body.addEventListener("click", (e) => {
  var count = 0;
  var interval = setInterval(() => {
    count++;
    circle.style.transform = "translate("+pos[count].x+"px, "+pos[count].y+"px)";
    console.log(count, pos.length-1);
    if (count == pos.length-1) {
      clearInterval(interval);
      count = 0;
      pos = [];
    }
  }, 10);
});
