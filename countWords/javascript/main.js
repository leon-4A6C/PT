var output = document.getElementsByClassName("output")[0];

document.getElementsByName("text")[0].addEventListener("keyup", e => {
  var text = e.target.value;
  text = text.trim().replace(/\s{2,}/g, ' ');
  var words = text.split(" ");
  if (words[0] === "" && words.length === 1) {
    words = [];
  }
  var maxWord = {length: 0, word: ""};
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxWord.length) {
      maxWord.length = words[i].length;
      maxWord.word = words[i];
    }
  }
  var freq = {};
  for (var i = 0; i < words.length; i++) {
    if (freq[words[i]]) {
      freq[words[i]]++;
    } else {
      freq[words[i]] = 1;
    }
  }
  var maxFreq = {freq: 0, word: ""};
  for (var word in freq) {
    if (freq.hasOwnProperty(word) && freq[word] > maxFreq.freq) {
      maxFreq = {freq: freq[word], word: word};
    }
  }
  var wordCount = words.length;
  var characterCount = text.length;
  output.innerHTML = text + "<br>Word count: " + wordCount + "<br>character count: " + characterCount + "<br>langste word lengte: " + maxWord.length + "<br>langste word: " + maxWord.word;
  output.innerHTML += "<br>most  frequent word: " + maxFreq.word + "<br>frequenty: " + maxFreq.freq;
});

document.getElementsByName("button")[0].addEventListener("click", e => {
  var text = document.getElementsByName("text")[0].value;
  text = allFirstCharacterUpper(text);
  output.innerHTML += "<br><br>" + text;
});
