class BsseLib{

    loadURL(urlpath){

        browser.timeouts('implicit',10000);
        browser.url(urlpath);
    }

}

module.exports= new BsseLib();