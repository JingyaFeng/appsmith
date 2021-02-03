describe("Check for redirects associated with auth pages", function() {
  it("Should redirect away from auth pages if already logged in", function() {
    const loginPageRoute = "/user/login";
    cy.visit(loginPageRoute);
    cy.wait(2000);
    cy.location("pathname").should("not.equal", loginPageRoute);
  });
});
