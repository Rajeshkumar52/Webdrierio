describe('Truely admin',async()=>{

    it('login correct',async()=>  //BROWSER OPENING AND ENTERING URL                                                       
    {
      await browser.url("https://dev2admin.truely.co.in/adminpanel/login")
      console.log(await browser.getTitle())
      await expect (browser).toHaveTitle('TRUELY :: Admin Login') 
    })
    
    it('login',async()=>     //LOGIN                     
    {
      await $("#login_username").setValue("admin")
      await $("#login_pass").setValue("truelyeatzila")
      await $("//button[@type='submit']").click()
    await browser.pause(2000)
    })
    
    it('assetion',async()=>
    {
        await expect(browser).toHaveUrl('https://dev2admin.truely.co.in/admin/dashboard')
        await expect(browser).toHaveUrlContaining('truely')
        await expect(browser).toHaveTitleContaining('TRUELY :: Accounts Dashboard')
    })

    it('Order received',async()=>

    {
        //*[@id="notification"]/div/div/div[2]/h5

        browser.maximizeWindow();

        const order_notification=await $('//h5[text()="New Order Received. To view click "]')

        browser.waitUntil(order_notification.isDisplayed)

       const text=await order_notification.getText()

        console.log(text)

        await $('(//a[text()="Here"])[1]').click()

      
      })
      

    


    })
