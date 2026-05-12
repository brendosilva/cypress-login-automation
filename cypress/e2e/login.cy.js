describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });
  context("Fluxo Feliz", () => {
    it("CT-001 - Deve realizar login com credencias validas", () => {
      cy.get("#username").type("student");
      cy.get("#password").type("Password123");
      cy.contains("button", "Submit").click();
      cy.contains("h1", "Logged In Successfully").should("be.visible");
    });
  });

  context("Fluxo Triste", () => {
    it("CT-002 - Deve exibir mensagem de erro ao enviar campos vazios", () => {
      cy.contains("button", "Submit").click();
      cy.contains("#error", "Your username is invalid!").should("be.visible");
    });
  });

  context("Segurança", () => {
    it("CT-003 - Deve exibir mensagem de erro padronizada, ao mandar senha incorreta", () => {
      cy.get("#username").type("student");
      cy.get("#password").type("Password1234");
      cy.contains("button", "Submit").click();
      cy.contains("#error", "Your username or password is invalid!").should(
        "be.visible",
      );
    });

    it("CT-004 -  Deve exibir mensagem de erro padronizada, ao mandar username incorreto", () => {
      cy.get("#username").type("students");
      cy.get("#password").type("Password123");
      cy.contains("button", "Submit").click();
      cy.contains("#error", "Your username or password is invalid!").should(
        "be.visible",
      );
    });

    it("CT-005 - Não deve aceitar username com espaço antes", () => {
      cy.get("#username").type(" student");
      cy.get("#password").type("Password123");
      cy.contains("button", "Submit").click();
      cy.contains("#error", "Your username is invalid!").should("be.visible");
    });
  });
});
