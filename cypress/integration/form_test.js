describe("Form App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // Getters for Form Inputs
  const firstNameInput = () => cy.get("input[name=firstName]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const termsOfServiceCheckbox = () => cy.get("input[name=termsOfService]");
  const submitButton = () => cy.get("button[id=submitButton]");

  // Verifying Cypress Functionality
  it("Cypress is functioning", () => {
    expect(4 + 4).to.equal(8);
    expect(1 + 2).not.to.equal(10);
  });

  // Verifying that page elements exist
  it("Page elements are existing", () => {
    firstNameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    termsOfServiceCheckbox().should("exist");
    submitButton().should("exist");
  });

  // Testing Form Input Functionality
  describe("Filling out form inputs", () => {
    it("Can navigate to url", () => {
      cy.url().should("include", "localhost");
    });

    it("Submit button should intialize disabled", () => {
      submitButton().should("be.disabled");
    });

    it("Can type inputs in input fields", () => {
      firstNameInput()
        .should("have.value", "")
        .type("John")
        .should("have.value", "John");
      emailInput()
        .should("have.value", "")
        .type("john@asdf.com")
        .should("have.value", "john@asdf.com");
      passwordInput()
        .should("have.value", "")
        .type("12345678")
        .should("have.value", "12345678");
      termsOfServiceCheckbox()
        .should("not.be.checked")
        .check()
        .should("be.checked");
    });
  });
});
