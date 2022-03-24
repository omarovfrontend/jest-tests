function removeChar(str){
  let res = '';
  for(let i = 1; i < str.length - 1; i++) {
    res += str[i];
  }
  return res;
}

module.exports = { removeChar };
