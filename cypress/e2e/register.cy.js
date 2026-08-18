 describe("Register The User ID",()=>{
   const username=`amad${Date.now()}`;
   const email=`amad${Date.now()}`+"@gmail.com";
    beforeEach(()=>{                                //hook

         cy.visit("https://petstore.octoperf.com/actions/Account.action?signonForm=");


    });

    afterEach(()=>{
      cy.log("clean up the data") //hook


    });
     
     
     it('Register User Id',()=> {
        // User Information
        cy.xpath("//a[normalize-space()='Register Now!']").click();
        cy.xpath("//h3[normalize-space()='User Information']").should('have.text','User Information');
        cy.xpath("//input[@name='username']").type(username);
        cy.xpath("//input[@name='password']").type("Amad161616");
        cy.xpath("//input[@name='repeatedPassword']").type("Amad161616");


        // Account Information
        cy.xpath("//input[@name='account.firstName']").type("Amaddd");
        cy.xpath("//input[@name='account.lastName']").type("Diallooo");
        cy.xpath("//input[@name='account.email']").type(email);
        cy.xpath("//input[@name='account.phone']").type("9883488438");
        cy.xpath("//input[@name='account.address1']").type("kathmandu");
        cy.xpath("//input[@name='account.address2']").type("baktapur");
        cy.xpath("//input[@name='account.city']").type("address");
        cy.xpath("//input[@name='account.state']").type("nepal");
        cy.xpath("//input[@name='account.zip']").type("3333");
        cy.xpath("//input[@name='account.country']").type("Afnei Sansar");
        cy.xpath("//select[@name='account.languagePreference']").select("japanese").should('have.value','japanese');
        cy.get("[name='account.favouriteCategoryId']").select("BIRDS").should('have.value','BIRDS');
        cy.get("[name='account.listOption']").check();
        cy.get("[name='account.bannerOption']").check();
        cy.xpath("//input[@name='newAccount']").click();

      // it('searching ',()=>{
      //   cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
        cy.get("[name='keyword']").type("Fish");
        cy.xpath("//input[@name='searchProducts']").click();
        cy.xpath("//a[normalize-space()='Return to Main Menu']").should("have.text","Return to Main Menu");
        cy.xpath("//a[normalize-space()='Return to Main Menu']").click();

    });

      


  




         
      //   });
    });