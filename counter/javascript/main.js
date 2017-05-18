var counters = document.getElementsByClassName("count");
for (var i = 0; i < counters.length; i++) {
  counters[i].addEventListener("click", (e)=>{
    var count = 0;
    var interval = setInterval(() => {
      var counter = e.target.children[0];
      counter.innerHTML = ++count;
      if (count == 100) {
        clearInterval(interval);
        document.body.classList.add("done");
        counters[i].classList.add("done");
      }
    }, 100);
  });
}
