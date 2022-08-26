const sentencesModeling = (test) => {
  let words = [];
  //   have all the texts
  let sentences2 = [];
  let sentences3 = [];
  let twoWordsPair = [];
  let threeWordsPair = [];

  //  ----- two words -------
  for (let i = 0; i < test.length; i = i + 2) {
    words.push(test[i + 1]);
  }

  let text = words.join("");

  let textSplited = text.toLowerCase().split(" ");

  let track = 1;
  for (let i = 0; i < textSplited.length; i++) {
    sentences2.push(textSplited[i] + " " + textSplited[track]);
    track++;
  }

  // have the unique texts
  let uniqueArr = sentences2.filter(function (item, id) {
    return sentences2.indexOf(item) == id;
  });

  for (let i = 0; i < uniqueArr.length; i++) {
    let count = 0;

    for (let y = 0; y < sentences2.length; y++) {
      if (uniqueArr[i] === sentences2[y]) {
        count++;
      }
      if (y === sentences2.length - 1) {
        twoWordsPair.push({ word: uniqueArr[i], count: count });
      }
    }
  }

  //   sort
  twoWordsPair.sort((a, b) => {
    return b.count - a.count;
  });

  //  --------- three words -------

  let track2 = 1;
  let track3 = 2;
  for (let i = 0; i < textSplited.length; i++) {
    sentences3.push(
      textSplited[i] + " " + textSplited[track2] + " " + textSplited[track3]
    );
    track2++;
    track3++;
  }

  // have the unique texts
  let uniqueArr2 = sentences3.filter(function (item, id) {
    return sentences3.indexOf(item) == id;
  });

  for (let i = 0; i < uniqueArr2.length; i++) {
    let count = 0;

    for (let y = 0; y < sentences3.length; y++) {
      if (uniqueArr2[i] === sentences3[y]) {
        count++;
      }
      if (y === sentences3.length - 1) {
        threeWordsPair.push({ word: uniqueArr2[i], count: count });
      }
    }
  }

  //   sort
  threeWordsPair.sort((a, b) => {
    return b.count - a.count;
  });

  return {
    twoWords: { count: twoWordsPair.length, words: twoWordsPair },
    threeWords: { count: threeWordsPair.length, words: threeWordsPair },
  };
};

module.exports = sentencesModeling;
