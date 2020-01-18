class Home_page{

    get contact_link(){
        return browser.element("//a[@href='index.php?module=Contacts&action=index']");
    }
    get QuickCreate(){
        return browser.element("//select[@id='qccombo']").click();
    }
    get NewCampaign(){
        return browser.clearElement("//select[@class='small']//option[@value='Campaigns']").click();
    }
}

module.exports=new Home_page();