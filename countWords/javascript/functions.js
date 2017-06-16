// function firstCharacterUpper(str) {
//   str = str.toLowerCase();
//   str = str.trim().replace(/\s{2,}/g, ' ');
//   var words = str.split(" ");
//   var characters = [];
//   var res = "";
//   for (var i = 0; i < words.length; i++) {
//     characters.push(words[i].split(""));
//     characters[i][0] = characters[i][0].toUpperCase();
//     words[i] = "";
//     for (var j = 0; j < characters[i].length; j++) {
//       words[i] += characters[i][j];
//     }
//     res += words[i] + " ";
//   }
//   return res
// }

function firstCharacterUpper(str) {
  return str.substr(0,1).toUpperCase() + str.substr(1);
}

function allFirstCharacterUpper(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = firstCharacterUpper(words[i]);
  }
  return words.join(" ");
}
