describe("TestComponent", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000"); // assumes the component is rendered at the root route
	});

	it("renders the component", () => {
		cy.contains("My App");
		cy.contains("Hello, World!");
		cy.contains("Click me");
		cy.get("form").should("exist");
		cy.contains("Name:");
		cy.contains("Email:");
		cy.contains("Submit");
		cy.get("#success").should("have.css", "display", "none");
		cy.contains("About");
		cy.get("#open-modal").should("exist");
		cy.get("#red-box").should("exist");
		cy.contains("Item 1");
		cy.contains("Item 2");
		cy.contains("Item 3");
		cy.get("#hidden-element").should("have.css", "display", "none");
		cy.contains("Show hidden element");
	});

	it("updates the name field", () => {
		const newName = "Jane Doe";
		cy.get("#name").clear().type(newName);
		cy.get("#name").should("have.value", newName);
	});

	it("submits the form", () => {
		cy.get("#email").type("test@example.com");
		cy.get("#submit").click();
		cy.get("#success").should("have.css", "display", "block");
	});

	it("opens and closes the modal", () => {
		cy.get("#open-modal").click();
		cy.get("#modal").should("be.visible");
		cy.get("#close-modal").click();
		cy.get("#modal").should("not.be.visible");
	});

	it("shows the hidden element", () => {
		cy.get("#show-button").click();
		cy.get("#hidden-element").should("be.visible");
	});
	it('updates the select element', () => {
		const newValue = 'option2';
		cy.get('#my-select').select(newValue);
		cy.get('#my-select').should('have.value', newValue);
	});
});
