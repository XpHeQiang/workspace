//express_demo.js 文件
var express = require('express');
var fs = require('fs');  //文件操作
var app = express();
 
app.get('/', function (req, res) {
  console.log('------------------------------------');
  console.log(344444);
  console.log('------------------------------------');
   res.send('Hello World');
})
app.get('/aaa', function (req, res) {
  var data = req.query.aa; //接收客户端发送过来的数据
  data = JSON.parse(data);

  console.log(data[1])

  var dataArr = [];
  for(var i=0; i<data[0].length; i++){
    var dataObj = {
      name : data[i][1],
      value : data[i][0],
      parent : data[i][2]
    };
    dataArr.push(dataObj);
  }

  console.log(dataArr);

  console.log("准备写入文件");
  fs.writeFile('address.json', JSON.stringify(dataArr) ,  function(err) {
     if (err) {
         return console.error(err);
     }
     console.log("数据写入成功！");
     console.log("--------我是分割线-------------")
     console.log("读取写入的数据！");
     fs.readFile('address.json', function (err, data) {
        if (err) {
           return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
     });
  });


})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
