const base=require("../../../com.vtiger.library/./GenerivLibrary/./BaseLib");
const genfun=require("../../../com.vtiger.library/./GenericFunction");
const wdFunction=require("../../../com.vtiger.library/./Webdriver_Function");

const loginPage=require("../../../com.vtiger.po/./Login-po");


describe("Vtiger",function () {

    var path="json/Jpath.json";

    /*it('should get the location of one or multiple elements', function () {
        /!*!// browser.url('http://github.com');
        // const name={"urlPath":"http://github.com"};
        // genfun.jsonFileWriter("json/config.json",name);
        // var location = browser.getLocation('.HeaderMenu-link no-underline');
        // console.log(location); // outputs: { x: 150, y: 20 }*!/
        var link="browser.element(\"//input[@id='user[login]']")";
        base.loadURL(genfun.jsonFileReader("json/config.json","urlPath"));
        // wdFunction.GetLocation('.octicon-mark-github');
        wdFunction.GetLocation(link);
       /!* // var xLocation = browser.getLocation('.octicon-mark-github', 'x')
        // console.log(xLocation); // outputs: 150
        //
        // var yLocation = browser.getLocation('.octicon-mark-github', 'y')
        // console.log(yLocation); // outputs: 20*!/
    });*/


    it(genfun.excellFileReader("TestData.XLSX","Sheet1","Tc_001"),function () {
        base.loadURL(genfun.jsonFileReader(path,"urlpath"));
        // wdFunction.GetURL();
        // wdFunction.GetTitle();
       // wdFunction.GetLocation(".Get more out of vtiger CRM");

        /*const jwriter={"name":"manjunath"};
        genfun.jsonFileWriter(path,jwriter);*/
       /*//  wdFunction.SetValue(loginPage.getElementUserNameTextField,genfun.jsonFileReader(path,"username"));
       //  wdFunction.AddValue(loginPage.getElementUserNameTextField,genfun.jsonFileReader(path,"username"));
       // wdFunction.ClearElement(loginPage.getElementUserNameTextField);
       //  wdFunction.explicitWaitForVisible(loginPage.getElementUserNameTextField);
       //  wdFunction.SetValue(loginPage.getElementPasswordTextField,genfun.jsonFileReader(path,"password"));
       //  wdFunction.explicitWaitForVisible(loginPage.getElementUserNameTextField);
       //  wdFunction.ClickOn(loginPage.getElementLoginButton);

        // wdFunction.Scrolling(loginPage.getElementcontact_link);


        // wdFunction.GetAttribute(loginPage.getElementUserNameTextField,"name");
        // wdFunction.GetText(loginPage.getElementvisibleText);
        // wdFunction.GetValue(loginPage.getElementUserNameTextField);*/
    })

    xit("Vtiger-ts-001",function () {
        // base.loadURL(genfun.jsonFileReader("json/config.json","urlpath"));
        // wdFunction.GetURL();
        // browser.newWindow("https://www.google.com");
        // browser.pause(6000);
        base.loadURL(genfun.jsonFileReader(path,"urlpath"));
        browser.pause(40000);
        wdFunction.DragAndDrop(loginPage.getElementFrom,loginPage.getElementTarget);
        // wdFunction.openWindow(genfun.jsonFileReader("json/config.json","urlpath"),"manjunath");
        // browser.pause(5000);
        // browser.newWindow("https://www.fb.com","facebook");

    });
});