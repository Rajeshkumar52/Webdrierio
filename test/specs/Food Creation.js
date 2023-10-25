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

    it('settings', async () => //MENU MANAGEMENT- CLICK
    {
        browser.maximizeWindow();

        await browser.refresh()
        await browser.pause(3000)
        const Settings = await $("//span[contains(text(), 'Settings')]")
        Settings.waitForDisplayed();

        const HoverSettings = await $("//span[contains(text(), 'Settings')]");
        await HoverSettings.moveTo();
        await HoverSettings.click()


        await browser.refresh()

        const HoverSettings1 = await $("//span[contains(text(), 'Settings')]");
        await HoverSettings1.moveTo();
        await HoverSettings1.click()

        browser.execute(() => {       
            window.scrollBy(0, 200);
        });

        const menu_management = $('//span[text()="Menu Management"]');

        // Use the click() method to click the new element
        menu_management.click();

        const search = await $("//input[@type='search']")

        await search.setValue("Sharma punjabi restaurant") //RESTAURANT SEARCH

        await browser.pause(5000)


        await browser.scroll(200, 0)

        await $("//a[normalize-space()='Manage Menu']").click() //MENU MANAGEMENT CLICK

        await browser.pause(3000)

        await $("//button[@class='btn btn-primary pull-right mb-3']").click()

        await $("//input[@type='search']").click()

        await $("//label[normalize-space()='Briyani']").click() //CATEGORY CLICK

        await $("//input[@placeholder='Enter the Food Title']").setValue("Chicken biryani") //FOOD TITLE

        await $("//input[@id='foodprice']").setValue("123") //FOOD PRICE

        const food_type = await $("//div[4]//div[1]//select[1]") //FOOD TYPE
        await food_type.selectByAttribute('value', '1')

        const cuisine_list = await $("//div[5]//div[1]//select[1]") //CUISINE LIST
        await cuisine_list.selectByAttribute('value', '32')

        await $("//input[@placeholder='Enter the Packaging Charge.']").setValue("12")

        await $("//input[@placeholder='Enter the Bulk Cut-off (BC) Value.']").setValue("3")

        await $("//input[@placeholder='Enter the Bulk Quantity Set (BS) Value.']").setValue("4")

        await $("//input[@placeholder='Enter the Food Prepartion time.']").setValue("8")

        await $("//textarea[@placeholder='Enter the Food Description']").setValue("Good food to eat")

        const food_image = await $("//input[@id='foodimage']")

        food_image.setValue('/home/sparkout/Downloads/restaurant.jpeg') //FOOD IMAGE

        const selling_day = await $("//select[@id='parent_time']")

        await selling_day.selectByAttribute('value', 'allday')

        const start_time = $("//input[@name='day_start_time[]']")

        await start_time.setValue("09:00")

        const end_time = $("//input[@name='day_finish_time[]']")

        await end_time.setValue("21:00")

        await $("//button[normalize-space()='SAVE']").click()





















    })

























})