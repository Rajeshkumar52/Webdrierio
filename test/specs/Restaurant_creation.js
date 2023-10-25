
describe('Truely admin', async () => {

  it('login correct', async () =>  //BROWSER OPENING AND ENTERING URL                                                       
  {
    await browser.url("https://dev2admin.truely.co.in/adminpanel/login")
    console.log(await browser.getTitle())
    await expect(browser).toHaveTitle('TRUELY :: Admin Login')
  })

  it('login', async () =>     //LOGIN                     
  {
    await $("#login_username").setValue("admin")
    await $("#login_pass").setValue("truelyeatzila")
    await $("//button[@type='submit']").click()
    await browser.pause(2000)
  })

  it('assetion', async () => {
    await expect(browser).toHaveUrl('https://dev2admin.truely.co.in/admin/dashboard')
    await expect(browser).toHaveUrlContaining('truely')
    await expect(browser).toHaveTitleContaining('TRUELY :: Accounts Dashboard')

  })

  it('settings', async () => //SETTINGS & MANAGE RESTAURANT- CLICK
  {
    browser.maximizeWindow();
    await browser.pause(3000)
    const Settings = await $("//span[contains(text(), 'Settings')]")
    Settings.waitForDisplayed();

    const HoverSettings = await $("//span[contains(text(), 'Settings')]");
    await HoverSettings.moveTo();

    const Manage_Restaurants = await $("//span[contains(text(), 'Manage Restaurants')]");
    await Manage_Restaurants.click()

    const Add_New_Restaurant = await $("/html/body/section/div/section/div/div[2]/div/div/div[1]/h2/a")

    Add_New_Restaurant.waitForDisplayed();

    (await $('/html/body/section/div/section/div/div[2]/div/div/div[1]/h2/a')).click()
  })

  it('Manage restaurant', async () => //MANAGE RESTAURANT - NEW RESTAURANT CREATION
  {
    await $('#restaurant_name').setValue('Krishna mess')
    await $('#email').setValue('Krishnamess@gmail.com')
    await $('#password').setValue('Test@123')
    await $('#phone').setValue('8882011000')
    await $('#phone2').setValue('8882011001')

    const activestatus = await $("//select[@name='status']") //RESTAURANT STATUS
    activestatus.selectByAttribute('value', '1')

    console.log(await activestatus.getValue())

    await $("//div[@class='col-md-6']//span[@class='slider round']").click() //MINIMUM ORDER VALUE
    await $("//input[@id='min_order_value']").setValue("12")

    const suburb = await $('//*[@id="add_restaurant"]/fieldset/div[1]/div[2]/div[5]/span[1]') //SUBURB
    await suburb.click()

    await browser.pause(3000)

    await $("//li[contains(text(), 'Coimbatore, Tamil Nadu, India')]").click()
    await suburb.click()

    await browser.pause(3000)
    await browser.scroll(0, 200)
    //CUISINE 
    const cousine = await $('//*[@id="add_restaurant"]/fieldset/div[1]/div[1]/div[7]/div[1]/div/span')
    await cousine.click()

    await browser.pause(5000)

    await $("//li[contains(text(), 'ITALIAN FOOD')]").click()
    await cousine.click()
    await $("//li[contains(text(), 'INDIAN')]").click()
    await cousine.click()
    await $("//li[contains(text(), 'AMERICAN')]").click()

    await $('#cost_for_two').setValue('122')

    /* 
   const description = await $("//textarea[@id='description']")
     await description.waitUntil(async function () {
         return (await this.getText()) === 'I am now different'
     }, {
         timeout: 5000,
         timeoutMsg: 'expected text to be different after 5s'
     })*/

    const Days = await $("#main-timing")//RESTAURANT OPENING CLOSING TIME
    Days.selectByAttribute('value', 'all')

    await $("//input[@name='opening_time[]']").setValue("09:00")
    await $("//input[@name='closing_time[]']").setValue("21:00")

    await $('//*[@id="estimated_food_time"]').setValue('12') //FPT

    const restaurant_type = await $('//*[@id="restaurant_type"]')//RESTAURANT TYPE
    restaurant_type.selectByAttribute('value', '3')

    console.log(await restaurant_type.getValue())

    await browser.scroll(0, 200)
    // Set the file path to be uploaded
    const imageupload = await browser.$('#bannerimg'); //RESTAURANT IMAGE UPLOAD

    imageupload.setValue('/home/sparkout/Downloads/restaurant.jpeg')

    const delivery_type = await $('//*[@id="add_restaurant"]/fieldset/div[1]/div[2]/div[9]/select')//DELIVERY TYPE
    delivery_type.selectByAttribute('value', '3')

    await $('//*[@id="searchMapInput"]').click()

    const address = await $('//*[@id="searchMapInput"]') //ADDRESS
    await address.click()
    await address.setValue("Guru amuthas")

    await browser.pause(3000)

    await $('/html/body/div[13]/div[1]/span[3]').click()

    await browser.scroll(0, 300)

    const pincode = await $('//*[@id="pin_code"]') //PINCODE
    await pincode.click
    await pincode.setValue("638701")

    await $('//*[@id="add_restaurant"]/fieldset/div[2]/label[2]/span').click()//BANK DETAILS

    await browser.scroll(0, 300)

    await $('//*[@id="crname"]').setValue('Rajeshkumar')
    await $('//*[@id="cgst"]').setValue('9')
    await $('//*[@id="sgst"]').setValue('18')
    await $('//*[@id="crno"]').setValue('12345678')
    await $('//*[@id="accountname"]').setValue('Rajeshkumar')
    await $('//*[@id="accnum"]').setValue('35550100002767')
    await $('//*[@id="bankname"]').setValue('Bank of baroda')
    await $('//*[@id="branchname"]').setValue('Kangeyam')
    await $('//*[@id="branchaddress"]').setValue('Kangeyam')
    await $('//*[@id="ifsc"]').setValue('BARBOKANGEY')

    const account_type = await $('//*[@id="account_type"]')//ACCOUNT TYPE
    account_type.selectByAttribute('value', '1')

    await browser.scroll(0, 200)
    await $('//*[@id="add_restaurant"]/fieldset/div[6]/div/div/button[2]').click()//SUBMIT BUTTON CLICK

  })














})








