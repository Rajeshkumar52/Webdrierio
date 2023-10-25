
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

    it('settings', async () => //RESTAURANT SUPER ADMIN- CLICK
    {
        browser.maximizeWindow();
        await browser.pause(3000)
        const Settings = await $("//span[contains(text(), 'Settings')]")
        Settings.waitForDisplayed();

        const HoverSettings = await $("//span[contains(text(), 'Settings')]");
        await HoverSettings.moveTo();


        const super_admin = await $('//span[text()="Restaurant Super Admin"]');
        await super_admin.click()

        await browser.pause(3000)

        await $('//a[text()="Add New User"]').click()

    })


    it('Add restaurant super admin', async () =>  //SUPER ADMIN DETAILS
    {
        await $('//*[@id="name"]').setValue('Riya Hotel')

        const restaurant_name = await $("//input[@role='searchbox']") //RESTAURANT SELECT
        await restaurant_name.setValue('Riya')
        const rest_name = await $('//li[contains(text(),"Riya")]')
        browser.waitUntil(rest_name.waitForDisplayed)
        await rest_name.click()

        await $('//*[@id="email"]').setValue('riyahotel@gmail.com')

        await $('//*[@id="password"]').setValue('Test@123')

        browser.scroll(0, 200)

        await $('//*[@id="phone"]').setValue('9090384756')

        const status = await $("//select[@name='active']") //ACTIVE STATUS

        status.selectByAttribute('value', '1')

        const Order_notificaiton = await $("//select[@id='is_notify']") //OREDER NOTIFICATION

        Order_notificaiton.selectByAttribute('value', '1')

        browser.scroll(0, 100)

        await $('//button[text()="Submit"]').click()



    })



})