var output = document.getElementsByClassName("output")[0];

document.getElementsByName("text")[0].addEventListener("keyup", e => {
  var text = e.target.value;
  output.innerHTML = text;
});

document.getElementsByName("button")[0].addEventListener("click", e => {
  
});
