const baseLib=require("../../../com.vtiger.library/./GenerivLibrary/./BaseLib");
const geneticFunction=require("../../../com.vtiger.library/./GenericFunction");
const webfunction=require("../../../com.vtiger.library/./Webdriver_Function");

const login=require("../../../com.vtiger.po/./Login-po");

const verify=require('chai').expect;


var flag;
var err

describe("login", function () {
    beforeEach(function () {
        try {
            flag=true;
            baseLib.loadURL(geneticFunction.propertyReader("./config.properties", "LoginURL"));
            verify(geneticFunction.propertyReader("./config.properties", "LoginURL")).to.equal(webfunction.GetURL());
            verify(geneticFunction.propertyReader("./config.properties", "LoginTitle")).to.equal(webfunction.GetTitle());
        }
        catch (e){
            flag=false;
            err=e;
        }
    });

    it(geneticFunction.excellFileReader("./TestData.xlsx","TestCase","TC_001")[1],function () {
        // baseLib.loadURL("/");
         /*baseLib.loadURL(geneticFunction.jsonFileReader("./Jpath.json","TC_001")[0]);
         var act=webfunction.GetURL();*/

        geneticFunction.exception(flag,err);
        webfunction.SetValue(login.getEleSearchTextField,geneticFunction.jsonFileReader("./Jpath.json","TC_001")[0]);



    });

});

