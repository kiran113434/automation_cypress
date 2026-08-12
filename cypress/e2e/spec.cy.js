describe("Login Test",()=> {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.xpath("//input[@id='user-name']").type("standard_user");
        cy.xpath(" //input[@placeholder='Password'] | //input[@value='password']").type("secret_sauce");
        cy.xpath("//input[@id='login-button']").click();
       

    });
    
   
    it("username" ,()=>{
        cy.xpath("//div[@class='app_logo']").should('be.visible');
      

    });


    

   it("Product",() => {
     cy.xpath("//div[@class='app_logo']").should('be.visible');

    cy.xpath("//img[@alt='Sauce Labs Backpack']").should('be.visible');
    cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();

   });

   it("Add Cart",()=>{
    cy.xpath("//a[@class='shopping_cart_link']").click();
    cy.xpath("//span[@class='title']").should('be.visible');
    cy.xpath("//button[@id='checkout']").click();

    

   });
  //  it('Checkout',()=>{
  //      cy.xpath("//span[normalize-space()='Checkout: Your Information']").should('be.visible');
  //  });
    it("Checkout form",()=>{
       cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']")
        .click();

    cy.xpath("//a[@class='shopping_cart_link']")
        .click();

    cy.xpath("//button[@id='checkout']")
        .click();
   
     cy.xpath("//span[normalize-space()='Checkout: Your Information']").should('be.visible');
    cy.xpath("//input[@id='first-name'] ").type('kiran');
    cy.xpath("//input[@id='last-name'] ").type('khadka');
    cy.xpath("//input[@id='postal-code']").type('446600');
    cy.xpath("//input[@id='continue']").click();
      //  cy.xpath("//span[normalize-space()='Checkout: Your Information']").should('be.visible');
    // cy.xpath("//span[@normalize-space='Checkout: Overview']").should('be.visible');
    cy.xpath("//button[@id='finish']").click();

   });
  //  it("Checkout Overview",()=>{
  //    cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']")
  //       .click();

  //   cy.xpath("//a[@class='shopping_cart_link']")
  //       .click();

  //   cy.xpath("//button[@id='checkout']")
  //       .click();
   
  //    cy.xpath("//span[normalize-space()='Checkout: Your Information']").should('be.visible');
  //   cy.xpath("//span[@normalize-space='Checkout: Overview']").should('be.visible');
  //   cy.xpath("//button[@id='finish']").click();


  //  });
});