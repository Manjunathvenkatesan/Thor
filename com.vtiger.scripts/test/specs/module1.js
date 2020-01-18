
var log=require("../../../com.vtiger.library/./GenerivLibrary/./Login");



var check=require("chai").expect;


var file=require("fs");
var rFile=file.readFileSync('json/jpath.json');
var data1=JSON.parse(rFile);

// var home="Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM";

/*
describe("vtiger" , function () {
    beforeEach(function () {
        log.enter_URL(data1.urlpath);
        log.PageTitle();
        log.enterNamePassword(data1.username,data1.password);
        log.wait();
        log.PageTitle();
    });
    it("vtiger-ts-001",function () {
        /!*log.PageTitle();
        check(home).to.equal(log.PageTitle);
        log.wait();
        log.click_element();
        log.wait();*!/
        log.wait();
        log.clickOnQuickCreate();
        log.wait();
        log.clickOnNewCampaign();
        log.wait();

    })
})*/
