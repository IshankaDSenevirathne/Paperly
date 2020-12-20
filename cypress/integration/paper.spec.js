

// import register from 'ignore-styles'
// register(['.sass', '.scss','.css'])


const papers = "src/paperdata/papers.json";
const subjects = "cypress/fixtures/subjects.json";
// require('ignore-styles').default(['.png', '.PNG']);

// import {data} from "../../src/paperdata/physics/2018/paper";

describe("papers.json is valid", () => {
  it("physics papers", () => {
    cy.readFile(papers).then((papers) => {
      console.log(papers);
      cy.readFile(subjects).then((subjects) => {
        console.log(subjects);
        subjects.subjects.forEach((subject) => {
          papers[subject].forEach((paper) => {
            console.log(paper);
            expect(paper["name"]).not.be.empty;
            expect(paper["year"]).not.be.empty;
          });
        });
      });
    });
  });
});

describe("physics paper", () => {
  it("physics papers", () => {
    // console.log(data)
    //   cy.readFile(papers).then((papers) => {
    //     console.log(papers);
    //     cy.readFile(subjects).then((subjects) => {
    //       console.log(subjects);
    //       subjects.subjects.forEach((subject) => {
    //         papers[subject].forEach((paper) => {
    //           console.log(paper);
    //           expect(paper["name"]).not.be.empty;
    //           expect(paper["year"]).not.be.empty;
    //         });
    //       });
    //     });
    //   });
  });
});
