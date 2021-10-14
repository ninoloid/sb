function findFirstStringInBracket(str) {
  if (str && str.length > 0) {
    const indexFirstBracketFound = str.indexOf('(');
    const indexClosingBracketFound = str.indexOf(')');

    if (indexFirstBracketFound >= 0 && indexClosingBracketFound >= 0) {
      return str.substring(indexFirstBracketFound + 1, indexClosingBracketFound);
    }
  }
  return '';
}
