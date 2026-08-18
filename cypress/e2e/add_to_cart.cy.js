import { add_to_cart_fish} from "../support/locators";
import {item_id} from "../support/locators";


describe("add to cart",()=>{
    beforeEach("Visit Add to cart ",()=>{
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action")


    });

    it("Fish ",()=>{
        cy.xpath(add_to_cart_fish.fish).should('be.visible').click();
        cy.xpath(add_to_cart_fish.angel_fish).should('be.visible').click();
        cy.log("angel fish");
        cy.xpath(add_to_cart_fish.est_1).click();
        
        cy.xpath(add_to_cart_fish.est_1_add_to_cart).click();
        cy.xpath(add_to_cart_fish.proceed_to_checkout).click();


    });

});