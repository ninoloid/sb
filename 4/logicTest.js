const findTheAnagram = (arr, memo = {}) => {
  if (!arr || arr.length === 0) {
    const result = [];
    for (key in memo) {
      result.push(memo[key]);
    }
    return result;
  }
  const sortedWord = arr[0].toLowerCase().split('').sort().join('');
  if (sortedWord in memo) {
    memo[sortedWord].push(arr[0]);
  } else {
    memo[sortedWord] = [arr[0]];
  }
  arr.shift();
  return findTheAnagram(arr, memo);
}

// console.log(findTheAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))
