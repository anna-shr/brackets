module.exports = function check(str, bracketsConfig) {

  let OPEN_BRACKETS = [];
  let BRACKETS_PAIR = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let j = 0; j < bracketsConfig[i].length - 1; j++) {
      OPEN_BRACKETS.push(bracketsConfig[i][j]);
      BRACKETS_PAIR[bracketsConfig[i][j + 1]] = bracketsConfig[i][j];
    }
  }

  function isBracketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];

      if ((BRACKETS_PAIR[currentSymbol] == currentSymbol && topElement != BRACKETS_PAIR[currentSymbol]) || (BRACKETS_PAIR[currentSymbol] != currentSymbol && OPEN_BRACKETS.includes(currentSymbol))) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let openingBracketForCurrentSymbol = BRACKETS_PAIR[currentSymbol];

        if (openingBracketForCurrentSymbol == topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  return isBracketsOk(str);

}