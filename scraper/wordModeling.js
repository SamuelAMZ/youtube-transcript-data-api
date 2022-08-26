const wordsModeling = (test) => {
  let words = [];
  let finalPairs = [];

  for (let i = 0; i < test.length; i = i + 2) {
    words.push(test[i + 1]);
  }

  let text = words.join("");
  //   have all the texts
  let textSplited = text.toLowerCase().split(" ");
  // have the unique texts
  let uniqueArr = textSplited.filter(function (item, id) {
    return textSplited.indexOf(item) == id;
  });

  for (let i = 0; i < uniqueArr.length; i++) {
    let count = 0;

    for (let y = 0; y < textSplited.length; y++) {
      if (uniqueArr[i] === textSplited[y]) {
        count++;
      }
      if (y === textSplited.length - 1) {
        finalPairs.push({ word: uniqueArr[i], count: count });
      }
    }
  }

  //   sort
  finalPairs.sort((a, b) => {
    return b.count - a.count;
  });

  return { count: finalPairs.length, words: finalPairs };
};

module.exports = wordsModeling;
