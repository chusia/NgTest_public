'use strict'

var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');
var supertest = require('supertest');
var puppeteer = require('puppeteer');

/* GET html page. */
router.get('/getHtml/:name', function (req, res, next) {
    var htmlName = req.params.name;
    console.log(htmlName)
    res.sendfile('views/' + htmlName + '.html');
});


router.get("/weather/:area", function (req, res, next) {
    var areaList = {
        "100": "中正區",
        "115": "南港區",
        "111": "士林區",
        "112": "北投區",
        "104": "中山區",
        "114": "內湖區",
        "103": "大同區",
        "110": "信義區",
        "105": "松山區",
        "106": "大安區",
        "108": "萬華區",
        "116": "文山區"
    }
    if (areaList[req.params.area] != undefined) {
        var area = areaList[req.params.area];
    }
    supertest('https://opendata.cwb.gov.tw')
        .get('/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-202DC472-3538-482D-A144-FD54F93DE9C5')
        .set('Accept', 'application/json')
        .end(function (err, response) {
            if (err != null) {
                console.log(err);
                res.json('error');
            } else {
                try {
                    console.log(response.body)
                    var result = response.body;
                    if (!result.success) {
                        console.log('error');
                        res.json('error');
                    } else {
                        var tmp = {};
                        var list = ['MinT', 'MaxT', 'Wx', 'T', 'PoP12h'];
                        for (var i = 0; i < result.records.locations[0].location.length; i++) {
                            var data = result.records.locations[0].location[i];
                            if (data.locationName == area) {
                                tmp.lat = data.lat;
                                tmp.lon = data.lon;
                                tmp.locationName = data.locationName;
                                for (var j = 0; j < data.weatherElement.length; j++) {
                                    var tooLong = data.weatherElement[j];
                                    if (list.indexOf(tooLong.elementName) != -1) {
                                        let array = [];
                                        tooLong.time.forEach(element => {
                                            array.push(element.elementValue[0].value);
                                        });
                                        let json = {};
                                        json.measures = tooLong.time[0].elementValue[0].measures;
                                        json.data = array;
                                        tmp[tooLong.elementName] = json;
                                    }
                                }
                                break;
                            }
                        }
                        res.json(tmp);
                    }
                } catch (error) {
                    console.log(error)
                    res.json(error)
                }
            }
        })
});
router.get("/news", function (req, res, next) {
    var browser;
    var page;
    var resultArray = [];
    var tArray = [];
    var url = "https://news.google.com/?hl=zh-TW&gl=TW&ceid=TW:zh-Hant";
    var article;
    async.series([
        function (next) {
            puppeteer.launch()
                .then(brw => {
                    browser = brw;
                    next();
                }).catch(err => {
                    console.log(err)
                });
        },
        function (next) {
            browser.newPage()
                .then(pag => {
                    page = pag;
                    next();
                }).catch(err => {
                    console.log(err)
                });
        },
        function (next) {
            page.goto(url)
                .then(pag => {
                    next();
                }).catch(err => {
                    console.log(err)
                });
        },
        function (next) {
            page.waitFor(".dSva6b")
                .then(pag => {
                    next();
                }).catch(err => {
                    console.log(err)
                });
        },
        function (next) {
            request.get({
                url: url,
            }, function (err, response, body) {

                if (body != undefined) {
                    //main c-wiz .lBwEZb.BL5WZb.xP6mwf
                    var strTmp = body.split('<c-wiz')
                    var str = strTmp[3].split('</c-wiz>')
                    var res = str[0].match(/jscontroller\=\"d0DtYd\"/g);
                    console.log(str[0].match(/div\sclass\=\"dSva6b/g));
                    article = 35;
                    console.log(article);
                    for (var i = 0; i < article; i++) {
                        var tmp = {}
                        tmp.no = (i + 1).toString();
                        tArray.push(tmp);
                    }
                    next();
                } else {
                    console.log("no body")
                }
            })
        },
        function (next) {
            //for(var i = 0; i < )
            let requests = tArray.map((ele) => {
                return new Promise((resolve, reject) => {
                    getArticle(ele, page, resultArray, resolve, reject);
                });
            });
            Promise.all(requests).then(value => {
                console.log(resultArray);
                next();
            }, resion => {
                res.json('err')
            });
        },
        function (next) {
            browser.close()
                .then(pag => {
                    res.json(resultArray);
                }).catch(err => {
                    console.log(err)
                });
        },
    ])
})

function getArticle(ele, page, resultArray, resolve, reject) {
    //.innerText  .length  .herf
    /*
    page.$eval("main c-wiz .lBwEZb.BL5WZb.xP6mwf div:nth-child(" + ele.no + ")", e => e.length)
    .then(text => {
        console.log(ele.no + ")" + text);
        ele.title = text;
        resolve();
    }).catch(err => {
        console.log(err);
        reject();
    });
    */
    page.$eval("main c-wiz .lBwEZb.BL5WZb.xP6mwf div:nth-child(" + ele.no + ")", e => e.innerText)
        .then(text => {
            var art = text.match(/more_vert/g)

            if (art != null) {
                var a = text.split("\n")

                if (a.length < 9) {
                    console.log('1')
                } else if(a.length == 9) {
                    console.log('2')
                    var tmp = {};
                    tmp.title = a[0];
                    tmp.content = a[2];
                    resultArray.push(tmp);
                } else {
                    console.log('3')
                    var tmp = {};
                    tmp.title = a[0];
                    tmp.content = a[2];
                    resultArray.push(tmp);
                    
                    var indexes = [];
                    var i = -1;
                    while ((i = a.indexOf("more_vert", i+1)) != -1){
                        indexes.push(i);
                    }
                    var time = indexes.length
                    for(var i = 0; i < time - 1; i++) {
                        var tmp = {};
                        tmp.title = a[indexes[i] + 1];
                        tmp.content = a[indexes[i] + 3]
                        resultArray.push(tmp);
                    }
                }
            }
            resolve();
        }).catch(err => {
            console.log(err);
            reject();
        });
}
module.exports = router;