class Loginpo{

    get getEleSearchTextField(){
        return browser.element("//input[@name='q']");
    }

   get getElementUserNameTextField(){
        return browser.element("//input[@name='user_name']");
    }

    get getElementPasswordTextField(){
        return browser.element("//input[@name='user_password']");
    }
    get getElementLoginButton(){
        return browser.element("#submitButton");

    }


    get getElementFrom(){
        return browser.element("//a[@href='https://jquery.com/']");
    }
    get getElementTarget(){
        return browser.element("//input[@name='s']");
    }

    get getElementcontact_link(){
        return browser.element("//a[@href='index.php?module=Contacts&action=index']");
    }

    get getElementvisibleText(){
        return browser.element("//a[@target='_blank' and @href='http://www.vtiger.com' ]");
    }
}

module.exports=new Loginpo();