// all the data
const dataModeler = (test) => {
  let timeStamp = [];
  let text = [];
  let textWithTime = [];

  for (let i = 0; i < test.length; i = i + 2) {
    timeStamp.push(test[i]);
  }

  for (let i = 0; i < test.length; i = i + 2) {
    text.push(test[i + 1]);
  }

  for (let i = 0; i < test.length; i = i + 2) {
    let time = test[i];
    textWithTime.push({ [time]: test[i + 1] });
  }

  return {
    text: text.join(""),
    timeStamp: timeStamp,
    textWithTimeStamp: textWithTime,
  };
};

// time only
const timeModeler = (test) => {
  let timeStamp = [];

  for (let i = 0; i < test.length; i = i + 2) {
    timeStamp.push(test[i]);
  }

  return {
    timeStamp: timeStamp,
  };
};

// text only
const textModeler = (test) => {
  let text = [];

  for (let i = 0; i < test.length; i = i + 2) {
    text.push(test[i + 1]);
  }

  return {
    text: text.join(""),
  };
};

// time and text only
const timeTextModeler = (test) => {
  let textWithTime = [];

  for (let i = 0; i < test.length; i = i + 2) {
    let time = test[i];
    textWithTime.push({ [time]: test[i + 1] });
  }

  return {
    textWithTimeStamp: textWithTime,
  };
};

module.exports = {
  dataModeler,
  timeModeler,
  textModeler,
  timeTextModeler,
};
