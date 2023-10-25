
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

  it('settings', async () => //SETTINGS & MANAGE RIDER- CLICK
  {
    browser.maximizeWindow();
    await browser.pause(3000)
    const Settings = await $("//span[contains(text(), 'Settings')]")
    Settings.waitForDisplayed();

    const HoverSettings = await $("//span[contains(text(), 'Settings')]");
    await HoverSettings.moveTo();


    const Manage_Riders = await $("//span[contains(text(), 'Manage Riders')]");
    await Manage_Riders.click()

    await browser.pause(3000)

    await $("//a[@class='btn btn-primary pull-right']").click()

  })


  it('Manage riders', async () => //MANAGE RIDERS - NEW RIDER CREATION
  {

    await $('//*[@id="name"]').setValue('Rajeshkumar')
    await $('//*[@id="email"]').setValue('rajeshkumar@gmail.com')
    await $('//*[@id="password"]').setValue('Test@123')
    await $('//*[@id="confirm_password"]').setValue('Test@123')

    await browser.scroll(0, 300)

    const status = await $('//*[@id="create_driver"]/div[5]/div/span/select')//STATUS
    await status.selectByAttribute('value', '1')

    await $('//*[@id="phone_no"]').setValue('9090123765')

    await $('//*[@id="select2-delivery_mode-container"]').click() //MODE OF DELIVERY

    await browser.pause(2000)

    await $("//li[text()='Bike']").click()

    await browser.pause(2000)

    await browser.scroll(0, 200)

    await $('//*[@id="select2-delivery-type-container"]').click()//DELIVERY TYPE

    await browser.pause(2000)

    await $("//li[text()='Admin']").click()

    await browser.scroll(0, 300)

    await $('//*[@id="select2-cityId-container"]').click() //CITY

    await browser.pause(2000)

    await $("//li[contains(text(), 'coimba')]").click()

    await $('//*[@id="select2-zones-container"]').click() //ZONE

    await browser.pause(2000)

    await $("//li[contains(text(), 'Saravanampatti')]").click()

    await $('//*[@id="vehicle_no"]').setValue('TN 42 AD 7053')

    await browser.scroll(0, 400)//IMAGE UPLOAD

    const driver_image = await $('//*[@id="image"]')
    driver_image.setValue('/home/sparkout/Downloads/driver.jpeg')

    const dl = await $('//*[@id="driving_license"]')
    dl.setValue('/home/sparkout/Downloads/driving.jpeg')

    const rc = await $('//*[@id="rcimage"]')
    rc.setValue('/home/sparkout/Downloads/rc.jpeg')

    const aadhar = await $('//*[@id="aadharimage"]')
    aadhar.setValue('/home/sparkout/Downloads/Aadhar.png')

    await $('//*[@id="accountname"]').setValue('Rajeshkumar') //BANK DETAILS

    await $('//*[@id="accnum"]').setValue('3555010002767')

    await $('//*[@id="bankname"]').setValue('Bank of Baroda')

    await $('//*[@id="branchname"]').setValue('Kangeyam branch')

    await $('//*[@id="branchaddress"]').setValue('Kangeyam')

    await $('//*[@id="ifsc"]').setValue('BARBOKANGEY')

    await $('//*[@id="pin_code"]').setValue('638701')

    const account_type = await $('//*[@id="account_type"]')//ACCOUNT TYPE

    account_type.selectByAttribute('value', 'Current')

    await browser.scroll(0, 100)

    await $('//button[text()="Submit"]').click() //SUBMIT



















  })


})