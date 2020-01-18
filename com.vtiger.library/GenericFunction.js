const fs=require("fs");
const xlsx=require("node-xlsx");

class GenericFunction{

    jsonFileReader(path,kName){
        var rFile=fs.readFileSync(path);
        var jsFile=JSON.parse(rFile);
        return jsFile[kName];


    }

    /*jsonFileWriter(path,object){

        var jsWriteFile=JSON.stringify(object);
        return fs.writeFile(path,jsWriteFile);

    }*/

    excellFileReader(path,sheet,row,cell){


        var d=xlsx.parse(path);
        for(var sheetNo=0;sheetNo<=d.length-1;sheetNo++){
            if(d[sheetNo].name===sheet){
                return d[sheetNo];
                break;
            }
            return d[sheetNo].data[row][cell];
        }

    }

    excellFileReader(path,sheet,tcid){
        var da=xlsx.parse(path);
        for(var sno=0;sno<=da.length-1;sno++){
            if(da[sno].name==sheet){

                for(var i=0;i<=da[sno].data.length-1;i++){
                    var temp=da[sno].data[i];
                    if(temp[0]==tcid){
                        break;
                    }
                }
            }
        }
        return temp;
    }


    propertyReader(path,value){
        var pFile=require("properties-reader");
        var property=pFile(path);
        return property.get(value);
    }

    exception(flag,err){
        if(flag==false){
            throw  err;
        }
    }


}

module.exports= new GenericFunction();