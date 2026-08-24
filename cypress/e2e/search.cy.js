
import {search_data} from "../fixtures/search_test_data";
import {search_selectors} from "../support/search_locators";





describe("",()=>{
    beforeEach(()=>{
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action");

    });

    it("",()=>{
        cy.get(search_selectors.search_bar)
        .should('be.visible').
        clear()
        .type(search_data.search_bar_data);

        cy.get(search_selectors.search_click).
        click();

        
cy.log(search_selectors.return_to_menu);
console.log(search_selectors.return_to_menu);
        cy.xpath(search_selectors.return_to_menu).
        click();
        

    });

})