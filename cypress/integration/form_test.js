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
  describe("Form can be filled", () => {
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
    });

    // Testing checkbox functionality
    it("Can check terms of service checkbox", () => {
      termsOfServiceCheckbox()
        .should("not.be.checked")
        .check()
        .should("be.checked");
    });
  });
  describe("Submitting Button functions properly", () => {
    it("Submit button is enabled when form is completely filled", () => {
      // Filling out form
      firstNameInput().type("John");
      emailInput().type("john@asdf.com");
      passwordInput().type("12345678");
      termsOfServiceCheckbox().click();
      // Verify that button is enabled when form is filled
      submitButton().should("not.be.disabled");
    });

    it("Form can be submitted with submit button", () => {
      // Filling out form
      firstNameInput().type("John");
      emailInput().type("john@asdf.com");
      passwordInput().type("12345678");
      termsOfServiceCheckbox().click();
      submitButton().click();
      // Verify the submition
      cy.contains("John");
    });
  });
  describe("Verifying form validation errors", () => {
    // Testing error messages for name input
    it("Invalid NAME input shows error", () => {
      firstNameInput().type("j");
      cy.contains("Name must be 2 or more characters.");
      firstNameInput().type("{selectall}{del}");
      cy.contains("Please input your name.");
    });
    // Testing error messages for email input
    it("Invalid EMAIL input shows error", () => {
      emailInput().type("j");
      cy.contains("Invalid email. Please try again.");
      emailInput().type("{selectall}{del}");
      cy.contains("Please input an email.");
    });
    // Testing error messages for password input
    it("Invalid PASSWORD input shows error", () => {
      passwordInput().type("j");
      cy.contains("Password must be 8 or more characters.");
      passwordInput().type("{selectall}{del}");
      cy.contains("Please input a password.");
    });
    // Testing error messages for checkbox
    it("Unchecking terms of service shows error message", () => {
      // Checking terms of service checkbox
      termsOfServiceCheckbox().click();
      // Unchecking terms of service checkbox
      termsOfServiceCheckbox().click();
      // Verify that an error is shown
      cy.contains("You must accept our terms of service in order to continue.");
    });
  });
});
