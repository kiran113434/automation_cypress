import { username_data,data } from "../fixtures/test_data";
import { selector } from "../support/locators";



describe("POM login",()=>{
 beforeEach("visit",()=>{
        cy.visit("https://petstore.octoperf.com/actions/Account.action?signonForm=")
    });



    it("Login test",()=>{
    cy.xpath(selector.username).should('be.visible').clear().type(data.username_data)

    cy.xpath(selector.password).should('be.visible').clear().type(data.password_data)
    cy.get(selector.login_button).click()
    })
})