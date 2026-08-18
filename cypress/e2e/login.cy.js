describe('JPEtStore login',()=>{
    it('Verify login with credentials',()=>{
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
         cy.xpath("//a[normalize-space()='Sign In']").click();
         cy.get('p:nth-child(1)').contains('Please enter your username and password.');
         cy.xpath("//input[@name='username']").clear().type('amad16');
         cy.xpath("//input[@name='password']").clear().type('amad1616');
         cy.xpath("//input[@name='signon']").click();
         cy.log('User logged in successfully');
         

    });
    it.only('Verify with invalid credentials',()=> {
       cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
         cy.xpath("//a[normalize-space()='Sign In']").click();
         cy.xpath("//input[@name='username']").clear().type('amad1');
         cy.xpath("//input[@name='password']").clear().type('amad161');
         cy.xpath("//input[@name='signon']").click();
         cy.log('User enter invalid  credentilas');
    });
    it('searching ',()=>{
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
        cy.xpath("//input[@name='keyword']").clear().type("fish");
        cy.xpath("//input[@name='searchProducts']").click();
        cy.xpath("//a[normalize-space()='Return to Main Menu']").should("have.text","Return to Main Menu");
        cy.xpath("//a[normalize-space()='Return to Main Menu']").click();

    });

    // it('Register User Id',()=> {
    //     cy.visit("https://petstore.octoperf.com/actions/Account.action?signonForm=").click();

    // })

});

