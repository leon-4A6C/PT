function firstCharacterUpper(str) {
  str = str.toLowerCase();
  str = str.split("");
  str[0].toUpperCase();
  var res = "";
  for (var i = 0; i < str.length; i++) {
    res += str[i];
  }
  return res
}
