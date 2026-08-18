import {register,selector} from "../support/locators";

import {data} from "../fixtures/test_data";


console.log("REGISTER:", register);
console.log("DATA:", data);

describe("Register the user",()=>{
    beforeEach("",()=>  {
        cy.visit("https://petstore.octoperf.com/actions/Account.action?signonForm=")
        // cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=");


    });

    it("Login FORM",()=>{
        cy.xpath(selector.username).should('be.visible').type(data.username_data);
        cy.xpath(selector.password).should('be.visible').type(data.password);
        cy.get(selector.login_button).should('be.visible').click()

    });


    // it("User Information",()=>{
    //     // User Information
    //     cy.xpath(register.user_id).should('be.visible').type(data.user_id);
    //     cy.xpath(register.new_password).type(data.password_data);
    //     cy.xpath(register.repeat_password).type(data.repeat_password);

    //     //Account Information
    //     cy.xpath(register.first_Name).type(data.first_Name);
    //     cy.xpath(register.last_Name).type(data.last_Name);
    //     cy.xpath(register.email).type(data.email_data);
    //     cy.xpath(register.phone).type(data.phone);
    //     cy.xpath(register.address_1).type(data.address_1);
    //     cy.xpath(register.address_2).type(data.address_2);
    //     cy.xpath(register.city).type(data.city);
    //     cy.xpath(register.state).type(data.state);
    //     cy.xpath(register.zip).type(data.zip);
    //     cy.xpath(register.country).type(data.country);

    //     //Profile Information
    //     cy.xpath(register.language_preferences).should('be.visible').select(data.language_preference);
    //     cy.get(register.favorite_category).should('be.visible').select(data.favourite_category);
    //     cy.get(register.enable_mylist).click();
    //     cy.get(register.enable_mybanner).click();
    //     cy.xpath(register.save_account_information).should('be.visible').click();
        


    // });
    // it("Account Information",()=>{
    //     cy.get(first_Name)

    // });




});
