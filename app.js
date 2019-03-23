'use strict';

const swaggerUi = require('swagger-ui-express'); // line 7
const swaggerJSDoc = require('swagger-jsdoc'); // line 8
const util = require("util");
const express = require('express');
const ejs = require("ejs");
const fileUpload = require('express-fileupload');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const partials = require("express-partials");
const session = require('express-session');
const i18n = require('i18n');
const log4js = require("log4js");
// 引用頁面
//const login = require("./kernel/routes/login")
//const api = require("./kernel/routes/api")
const api = require("./routes/api")
const index = require("./routes/index")

const app = express();

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'dateFile', filename: './logs/cheese.log' }
  },
  categories: {
    default: { appenders: ['file', 'console'], level: 'all' }
  }
 });

 var logger = log4js.getLogger('default');
 app.use(log4js.connectLogger(logger, { level: 'auto'
}));

var logger = log4js.getLogger('default');
app.use(log4js.connectLogger(logger, {
  level: 'auto'
}));

i18n.configure({
  locales: ['en'],
  directory: path.join(__dirname, "module", "config", 'locales'),
  cookie: 'mycokie'
});
app.use(i18n.init);

var options = {
  swaggerDefinition: {
    info: {
      title: i18n.__("TITLE_CII") + '-open api 清單',
      version: '1.0.0',
      description: i18n.__("TITLE_CII") + '-open api 清單',
    },
  },
  apis: ['./routes/*'],
};
var swaggerSpec = swaggerJSDoc(options);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(partials());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: "10mb",
  extended: true,
  parameterLimit: 10000,
  uploadcDir: "./uploadTmp",
}));

app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/ng', express.static(path.join(__dirname, 'ng')));
app.use('/assets', express.static(path.join(__dirname, 'ng/assets')));




// bind session
app.use(function (req, res, next) {
  console.log(path.join(__dirname, 'ng'));
  next();
});

var dirs = __dirname.split(path.sep);
var context = dirs[dirs.length - 1]

app.get('/' + context + '/api-docs.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/' + context + '/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//載入頁面 （ 第一個參數「URI」，第二個參數 模組名稱）
app.use('/', index);
app.use('/api', api);
//app.use('/login', login);
//app.use('/api', api);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  if (err.code === 'EBADCSRFTOKEN') {
    res.locals.message = "CSRF驗證失敗，請由系統主頁進入";
  } else {
    res.locals.message = err.message;
  }

  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
    console.log(res.locals.message); //錯誤訊息
    res.sendfile('views/error.html');
        
});

module.exports = app;