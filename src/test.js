var utils = require('./util');  
var async = require('async');  
  
var task1 = function(callback){  
    let url = 'http://www.baidu.com';  
    utils.createQr(url,function(err, data){  
        if(err){  
            console.log(err);  
            callback(err, null);  
            return;  
        }  
        callback(null,data);  
    })  
};  
  
var task2 = function(waterImg, callback){  
    //打水印背景图片
    let sourceImg = './image/1.jpg';  
    let destImg = "./dist/result.jpg";  
    utils.addWater(sourceImg, waterImg, destImg, function(data){  
        callback(null, data);  
    })  
};  
  
async.waterfall([task1,task2], function(err, result){  
    if(err){  
        console.log(err);  
        return;  
    }  
    console.log(result);  
})