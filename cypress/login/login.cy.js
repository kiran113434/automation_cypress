describe("Login Test",()=> {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");

    });
    
    it("Username",()=> {
        cy.xpath("//input[@id='user-name']").type("error_user");


    });

    it("Password",()=>{
        cy.xpath(" //input[@placeholder='Password'] | //input[@value='password']").type("secret_sauce");

    });
    it("Login button",()=>{
        cy.xpath("//input[@id='user-name']").click();
    });
});