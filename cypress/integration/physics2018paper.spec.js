const dopaper = () => {
  it("Visits the paperly", () => {
    cy.visit("http://localhost:3000/");
  });

  it("clicks the GET STARTED button", () => {
    cy.get("[data-cy=getstarted]").click({ force: true });

    // <Button variant="contained" color="primary" size="large" data-cy="get started">
  });

  it("navigates to subject menu", () => {
    cy.url().should("include", "/subjectmenu");
  });

  it("select physics paper", () => {
    // cy.waitForReact();
    cy.get("[data-cy=submit-Physics]").click({ force: true });
    cy.url().should("include", "/quizes?subject=physics");
    // cy.get("[data-cy=Physics]").click();
  });

  it("select 2018 physics paper", () => {
    // cy.waitForReact();
    cy.get("[data-cy=subject-menu]").click();
    // cy.get("[data-cy=Physics]").click();
  });

  it("select 2018 physics paper", () => {
    // cy.waitForReact();
    cy.get("[data-cy=subject-2018AdvancedLevelPhysics]").click();
    // cy.get("[data-cy=Physics]").click();
  });

  it("Start 2018 physics paper exam", () => {
    // cy.waitForReact();
    cy.get("[data-cy=Exam]").click();
    // cy.get("[data-cy=Physics]").click();
  });

  for (let index = 0; index < 10; index++) {
    it(`select ${index + 1} awnser in first question`, () => {
      // cy.waitForReact();
      cy.get(`[data-cy=${(Math.round(Math.random() * 100) % 5) + 1}]`).click({force:true});
      // cy.get("[data-cy=Physics]").click();
    });

    it("goto next question", () => {
      // cy.waitForReact();
      cy.get("[data-cy=next]").click({force:true});
      // cy.get("[data-cy=Physics]").click();
    });
  }

  it("goto results", () => {
    // cy.waitForReact();
    cy.get("[data-cy=Results]").click({force:true});
    // cy.get("[data-cy=Physics]").click();
  });

  it("Agree to submit", () => {
    // cy.waitForReact();
    cy.get("[data-cy=agree]").click({force:true});
    // cy.get("[data-cy=Physics]").click();
  });

  it("go to review", () => {
    // cy.waitForReact();
    cy.get("[data-cy=Review]").click({force:true});
    // cy.get("[data-cy=Physics]").click();
  });

  it("Finish paper", () => {
    // cy.waitForReact();
    cy.get("[data-cy=Finish]").click({force:true});
    // cy.get("[data-cy=Physics]").click();
  });

  it("Agree to Finish paper", () => {
    // cy.waitForReact();
    cy.get("[data-cy=agree]").click({force:true});
    // cy.get("[data-cy=Physics]").click();
  });

  it("write a review", () => {

    cy.get('[data-cy=name-feild]')
    .type('Cypress test runner ')
    // .should('have.value', 'Cypress test runner ')

    cy.get('[data-cy=feedback-feild]')
    .type('Paperly is awesome dude')
    // .should('have.value', 'Paperly is awesome dude')

    cy.get("[data-cy=submit-feedback]").click({force:true});
    // cy.get('.MuiBackdrop-root').
    // cy.waitForReact();
    // cy.get("[data-cy=agree]").click();
    // cy.get("[data-cy=Physics]").click();
  });



};

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  dopaper();

  // data-cy="agree"

  // it("select first awnser in first question", () => {
  //   // cy.waitForReact();
  //   cy.get("[data-cy=1]").click();
  //   // cy.get("[data-cy=Physics]").click();
  // });

  // it("goto next question", () => {
  //   // cy.waitForReact();
  //   cy.get("[data-cy=next]").click();
  //   // cy.get("[data-cy=Physics]").click();
  // });

  // Should be on a new URL which includes '/commands/actions'
  //contains('type').click()

  // // Should be on a new URL which includes '/commands/actions'
  // cy.url().should('include', '/commands/actions')
});

// describe("mobile-tests", () => {
//   beforeEach(() => {
//     cy.viewport("iphone-x");
//   });

//   dopaper();

//   // Tests here
// });
