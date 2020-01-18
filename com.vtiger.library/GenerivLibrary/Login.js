var page=require("../../com.vtiger.po/./Login-po");
var hPage=require("../../com.vtiger.po/./Home-po");
var check=require("chai").expect;

class Login
{
    enterNamePassword(uName,Pword){
        /*// browser.element("//input[@name='user_name']").setValue(uName);
        // browser.element("//input[@name='user_password']").setValue(Pword);
        // browser.element("#submitButton").click();*/
        page.getUserNameTextField().setValue(uName);
        page.getPasswordTextField().setValue(Pword);
        page.getLoginButton();

    }

    PageTitle(){
        browser.getTitle();
    }
    click_element(){
        hPage.getcontact_link().click();
    }

    wait(){
        return browser.pause(10000);
    }
    verify(homepage){
        check(homepage).to.equal(getPageTitle());
    }
    clickOnQuickCreate(){
        hPage.getQuickCreate();
    }
    clickOnNewCampaign(){
        hPage.getNewCampaign();
    }
}
module.exports=new Login();