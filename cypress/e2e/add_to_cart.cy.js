import { fish_data } from "../fixtures/test_data";
import { add_to_cart_fish} from "../support/locators";
// import {item_id} from "../support/locators";


describe("add to cart",()=>{
    beforeEach("Visit Add to cart ",()=>{
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action");


    });

    it("Fish ",()=>{
        cy.xpath(add_to_cart_fish.fish).should('be.visible').click();
        cy.xpath(add_to_cart_fish.angel_fish).should('be.visible').click();
        cy.log("angel fish");
        cy.xpath(add_to_cart_fish.est_1).click();
        
        cy.xpath(add_to_cart_fish.est_1_add_to_cart).click();
        cy.xpath(add_to_cart_fish.proceed_to_checkout).click();
        console.log("fish_data =", fish_data);
        // cy.xpath(add_to_cart_fish.card_type).should('be.visible').select(fish_data.card_type)
        cy.get(add_to_cart_fish.card_number).type(fish_data.card_number)
        cy.get(add_to_cart_fish.expiry_date).type(fish_data.expiry_date)
        cy.get(add_to_cart_fish.first_name).type(fish_data.first_name)
        cy.get(add_to_cart_fish.last_name).type(fish_data.last_name)
        cy.get(add_to_cart_fish.address_1).type(fish_data.address_1)
        cy.get(add_to_cart_fish.address_2).type(fish_data.address_2)
        cy.get(add_to_cart_fish.city).type(fish_data.city)
        cy.get(add_to_cart_fish.state).type(fish_data.state)
        cy.get(add_to_cart_fish.zip).type(fish_data.zip)
        cy.get(add_to_cart_fish.country).type(fish_data.country)

        cy.get(add_to_cart_fish.ship_to_different_address).click()
        cy.get(add_to_cart_fish.continue).click()
        cy.get(add_to_cart_fish.confirm).click()


    });

});