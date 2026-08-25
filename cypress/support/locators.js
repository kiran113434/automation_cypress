export const selector = {
    username:"//input[@name='username']",
    password:"//input[@name='password']",
    login_button:"[name='signon']",
    enter_store:"/html[1]/body[1]/div[1]/p[1]/a[1]"
}

export const register={
    //User Inofrmation
    user_id:"//input[@name='username']",
    new_password:"//input[@name='password']",
    repeat_password:"//input[@name='repeatedPassword']",


    //Account Information
    first_Name:"//input[@name='account.firstName']",
    last_Name:"//input[@name='account.lastName']",
    email:"//input[@name='account.email']",
    phone:"//input[@name='account.phone']",
    address_1:"//input[@name='account.address1']",
    address_2:"//input[@name='account.address2']",
    city:"//input[@name='account.city']",
    state:"//input[@name='account.state']",
    zip:"//input[@name='account.zip']",
    country:"//input[@name='account.country']",
    //Profile Information
    language_preferences:"//select[@name='account.languagePreference']",
    favorite_category:"[name='account.favouriteCategoryId']",
    enable_mylist:"[name='account.listOption']",
    enable_mybanner:"[name='account.bannerOption']",
    save_account_information:"//input[@name='newAccount']"
}

export const add_to_cart_fish={
    fish:"/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/a[1]/img[1]",
    angel_fish:"//a[normalize-space()='FI-SW-01']",
        est_1:"//a[normalize-space()='EST-1']",

  tiger_Shark:"//a[normalize-space()='FI-SW-02']",
    koi:"//a[normalize-space()='FI-FW-01']",
   gold_fish:"//a[normalize-space()='FI-FW-02']",
  est_1_add_to_cart:"/html[1]/body[1]/div[2]/div[2]/table[1]/tbody[1]/tr[7]/td[1]/a[1]",
    proceed_to_checkout:"//a[normalize-space()='Proceed to Checkout']",
    card_type:"select[name='order.cardType']",
    card_number:"[name='order.creditCard']",
    expiry_date:"[name='order.expiryDate']",
    first_name:"[name='order.billToFirstName",
    last_name:"[name='order.billToLastName']",
    address_1:"[name='order.billAddress1']",
    address_2:"[name='order.billAddress2']",
    city:"[name='order.billCity']",
    state:"[name='order.billState']",
    zip:"[name='order.billZip']",
    country:"[name='order.billCountry']",
    ship_to_different_address:"[name='shippingAddressRequired']",
    continue:"[name='newOrder']",
    confirm:".Button"



    
 }
  export const item_id={
    // est_1:"//a[normalize-space()='EST-1']",
    // est_1_add_to_cart:"/html[1]/body[1]/div[2]/div[2]/table[1]/tbody[1]/tr[2]/td[5]/a[1]",
    remove_1:"//a[normalize-space()='Remove']",
    update_cart:"//input[@name='updateCartQuantities']",
    // proceed_to_checkout:"//a[normalize-space()='Proceed to Checkout']",
    est_2:"//a[normalize-space()='EST-2']",
    est_2_add_to_cart:"//tbody/tr[3]/td[5]/a[1]",
    remove_2:"//tbody/tr[3]/td[8]/a[1]",
    return_to_main_menu:"//a[normalize-space()='Return to Main Menu']"
  }
// /html[1]/body[1]/div[2]/div[2]/div[1]/a[1]