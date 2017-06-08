var pos = [];
var diffDate;
var active = false;
var preview = document.getElementById('circlePreview');
document.body.addEventListener("mousemove", (e) => {
  if (!active) {
    if (pos.length === 0) {
      diffDate = Date.now();
      lastSize = 1;
    } else {
      lastSize = pos[pos.length-1].size;
    }
    var cicle = document.getElementById("circle");
    var x,y;
    x = e.clientX - circle.clientWidth;
    y = e.clientY - circle.clientHeight;
    pos.push({x: x, y: y, time: Date.now()-diffDate, size: lastSize});
    preview.style.transform = "translate("+x+"px, "+y+"px) scale("+lastSize+", "+lastSize+")";
  }
});
document.body.addEventListener("DOMMouseScroll", (e) => {
  console.log(e.detail);
  if (e.detail > 0) {
    pos[pos.length-1].size--;
  } else {
    pos[pos.length-1].size++;
  }
})
document.body.addEventListener("click", (e) => {
  if (!active) {
    active = true;
    for (var i = 0; i < pos.length; i++) {
      (function(i) {
        setTimeout(() => {
          console.log(pos[i]);
          circle.style.transform = "translate("+pos[i].x+"px, "+pos[i].y+"px) scale("+pos[i].size+", "+pos[i].size+")";
          if (i == pos.length-1) {
            pos = [];
            active = false;
          }
        }, pos[i].time);
      }(i));
    }
  }
});
