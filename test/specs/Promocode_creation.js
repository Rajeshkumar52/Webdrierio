
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

    it('settings', async () => //PROMOCODES- CLICK
    {
        browser.maximizeWindow();
        await browser.pause(3000)
        const Settings = await $("//span[contains(text(), 'Settings')]")
        Settings.waitForDisplayed();

        const HoverSettings = await $("//span[contains(text(), 'Settings')]");
        await HoverSettings.moveTo();


        const promocodes = await $('//span[text()="Promocodes"]');
        await promocodes.click()

        await browser.pause(3000)

        await $('//a[text()="+ Add new Promocode"]').click()

    })

    it('New promocode creation', async () => {
        await $("//input[@name='title']").setValue("Promocode")

        await $("//textarea[@title='Special characters are not allowed']").setValue('Promocode created by automation script')

        await $("//input[@name='code']").setValue("NEW")

        await browser.scroll(0, 300)

        //await $("//ul[@class='select2-selection__rendered']").setValue('All')

        const restaurant_name = await $("//input[@role='searchbox']") //RESTAURANT SELECT
        //await restaurant_name.click()
        await restaurant_name.setValue('All')
        const rest_name = await $('//li[text()="All Restaurants"]')
        browser.waitUntil(rest_name.waitForDisplayed)
        await rest_name.click()



        let users = await $("//label[@for='minimum_order']")
        await users.click

        const offer_type = await $("//select[@id='offer_type']") //OFFER TYPE

        await offer_type.selectByAttribute('value', '0')

        await browser.pause(2000)

        let offer_type1 = await offer_type.getText()

        if (await( offer_type1 = "Amount")) {
            await $("//input[@id='discount']").setValue("12")
        }

        else {
            await $("//input[@id='max_amount']").setValue("120")

            await $("//input[@id='discount']").setValue("12")
        }

        await $("//input[@id='total_use']").setValue('20')

        await $("//input[@id='use_per_customer']").setValue('20')

        await $("//input[@id='available_from']").click()
        const start_date = await $('//a[text()="25"]')
        browser.waitUntil(start_date.waitForDisplayed)
        await start_date.click()

        await $("//input[@id='valid_till']").click()
        const end_date = await $('//a[text()="25"]')
        browser.waitUntil(end_date.waitForDisplayed)
        await end_date.click()

        await $("//button[@id='pagesubmit']").click()

        const month = await $("//span[@class='ui-datepicker-month']")
        const year = await $("//span[@class='ui-datepicker-year']")

        const nexticon = await $("//span[@class='ui-icon ui-icon-circle-triangle-e']")
        const previosicon = await $("//span[@class='ui-icon ui-icon-circle-triangle-w']")



    })

})