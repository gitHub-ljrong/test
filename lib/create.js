var fs = require('fs');
var path = require('path');
var template = require("art-template");
var tplPath = path.resolve(__dirname, "../tpl");

function getCurrentTime() {
    var timer = new Date(),
        year = timer.getFullYear(),
        month = (timer.getMonth() + 1) < 10 ? "0" + (timer.getMonth() + 1) : (timer.getMonth() + 1),
        day = timer.getDate() < 10 ? "0" + timer.getDate() : timer.getDate(),
        hour = timer.getHours() < 10 ? "0" + timer.getHours() : timer.getHours(),
        min = timer.getMinutes() < 10 ? "0" + timer.getMinutes() : timer.getMinutes(),
        second = timer.getSeconds() < 10 ? "0" + timer.getSeconds() : timer.getSeconds();
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + second;
}

function caretePage(pagePath) {
    if (!fs.existsSync('./'+pagePath)) {

        var htmlStr = template(tplPath+'/html', {name: pagePath});
        var jsStr =   template(tplPath+'/js', {time: getCurrentTime()});
        var cssStr =   template(tplPath+'/css', {time: getCurrentTime()});

        fs.mkdir(pagePath, function(err) {
            if (err) { console.log(err); }
            console.log(pagePath + "目录创建成功...");
        });

        fs.mkdir(pagePath+'/scss', function(err) {
            if (err) { console.log(err); }
            console.log("scss目录创建成功...");
        });

        fs.mkdir(pagePath+'/js', function(err) {
            if (err) { console.log(err); }
            console.log("js目录创建成功...");
        });

        fs.mkdir(pagePath+'/images', function(err) {
            if (err) { console.log(err); }
            console.log("images目录创建成功...");
        });

        fs.mkdir(pagePath+'/icons', function(err) {
            if (err) { console.log(err); }
            console.log("icons...");
        });

        fs.mkdir(pagePath+'/tpl', function(err) {
            if (err) { console.log(err); }
            console.log("tpl目录创建成功...");
        });

        fs.writeFile('./'+pagePath+'/'+pagePath+'.html', htmlStr, function(err) {
            if (err) { console.log("create " + pagePath + ".html err : " + err); }
            console.log(pagePath + ".html 文件创建成功...");
        });

        fs.writeFile('./'+pagePath+'/'+pagePath+'.enter.js', jsStr, function(err) {
            if (err) { console.log("create " + pagePath + ".js err : " + err); }
            console.log(pagePath + ".enter.js 文件创建成功...");
        });
        fs.writeFile('./'+pagePath+'/'+pagePath+'.enter.scss', cssStr, function(err) {
            if (err) { console.log("create " + pagePath + ".scss err : " + err); }
            console.log(pagePath + ".enter.scss 文件创建成功...");
        });

    } else {
        console.log("目录已存在...");
    }
}
module.exports = caretePage;