3
class Webdriver_Function{

    ClickOn(element){
        element.click();
    }
    SetValue(element,value){
        element.setValue(value);
    }
    AddValue(element,value){
        element.addValue(value);
    }

    ClearElement(element){
        element.clearElement();
    }

    GetLocation(value){
        return browser.getLocation(value);
    }

    GetTitle(){
        return browser.getTitle();
    }

    GetURL(){
        return browser.getUrl();
    }

    GetAttribute(element,attribute){
         element.getAttribute(attribute);
    }

    GetText(){
        return browser.getText();
    }

    GetValue(){
        return browser.getValue();
    }

    AlertAccept(){
        return browser.alertAccept();
    }

    AlertDismiss(){
        return browser.alertDismiss();
    }

    /*mouse over actoins*/
    MouseOver(element){
        element.moveToObject();
    }

    DragAndDrop(element,target){
        element.dragAndDrop(target);
    }
    DoubleClick(element){
        element.doubleClick();
    }

    /*Select by class*/

    SelectByAttribute(element,attribute,value) {
        element.selectByAttribute(attribute,value);
    }
    SelectByIndex(element,index){
        element.selectByIndex(index);
    }
    SelectByValue(element,value){
        element.selectByValue(value);
    }
    SelectByVisibleText(element,text){
        element.selectByVisibleText(text);
    }

    openWindow(bURL,bName){
        return browser.Window.open(bName,bName);
    }

    GoForword(){
        return browser.forward();
    }

    GetBack(){
        return browser.back();
    }

    Refresh(){
        return browser.refresh();
    }

    Scrolling(element){
        element.scroll();
    }



    explicitWaitForVisible(element,time){
        if(time===undefined){
            element.waitForVisible();
        }
        else {
            element.waitForVisible(time);
        }

    }
    explictWaitForValue(element,time){
        if(time===undefined){
            element.waitForValue();
        }
        else {
            element.waitForValue(time);
        }
    }

    explicitWaitForText(element,time){
        if(time===undefined){
            element.waitForText();
        }
        else {
            element.waitForText(time);
        }
    }
    explicitWaitForSelected(element,time){
        if(time===undefined){
            element.waitForSelected();
        }
        else{
            element.waitForSelected(time);
        }
    }
    explictWaitForExist(element,time){
        if(time===undefined){
            element.waitForExist();
        }
        else{
            element.waitForExist(time);
        }
    }


}

module.exports=new Webdriver_Function();