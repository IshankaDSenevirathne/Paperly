const bio = require("./src/paperdata/biology/2019/paper.json");

const newbio = [];

console.log(bio);

bio.content.pages.forEach((element, id) => {
  console.log(id);

  let tempchoices = [];
  let correct = 5;
  element.choices.forEach((element2, id2) => {
    tempchoices.push({
      id: id2 + 1,
      text: element2,
    });

    if (element2 === element.correctAnswer) {
      correct = id2 + 1;
    }
  });

  let temp = {
    title: `## ${id}. ${element.title}`,
    choices: tempchoices,
    correctAnswer: correct,
  };
  console.log(temp);

  newbio.push(temp);
});

newbio.forEach((element, id) => {
  if (id > 10) {
    return;
  }

  console.log(JSON.stringify(element));
});
