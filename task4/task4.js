function repeatStr (n, s) {
  let res = '';
  for(let i = n; i > 0; i--) {
    res += s;
  }
  return res;
}

module.exports = { repeatStr };
