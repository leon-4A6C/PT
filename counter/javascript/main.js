var count = 0;
var interval = setInterval(() => {
  var counters = document.getElementsByClassName("counter");
  var counts = document.getElementsByClassName("counts");
  for (var i = 0; i < counters.length; i++) {
    counters[i].innerHTML = ++count;
  }
  if (count == 100) {
    clearInterval(interval);
    document.body.classList.add("done");
    for (var i = 0; i < counts.length; i++) {
      counts[i].classList.add("done");
    }
  }
}, 100)
