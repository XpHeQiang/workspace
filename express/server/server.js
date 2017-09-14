//express_demo.js 文件
var express = require('express');
var buf = new Buffer(1024);
var fs = require('fs');  //文件操作
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/aaa', function (req, res) {
  var data = req.query.aa; //接收客户端发送过来的数据

  data = JSON.parse(data);
  var dataArr = [];
  for(var i=0; i<data[0].length; i++){
    var dataObj = {
      name : data[i][1],
      value : data[i][0],
      parent : data[i][2]
    };
    fs.appendFile('address.json', JSON.stringify(dataObj)+"," ,  function(err) {});
    // dataArr.push(dataObj);
  }

  

  // console.log("准备打开已存在的文件！");
  // fs.open('address.json', 'r+', function(err, fd) {
  //    if (err) {
  //        return console.error(err);
  //        fs.writeFile('address.json', "" ,  function(err) {});
  //    }
  //    console.log("文件打开成功！");
  //    console.log("准备读取文件：");
  //    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
  //       if (err){
  //          console.log(err);
  //       }
        
  //       // 仅输出读取的字节
  //       if(bytes > 0){
  //         console.log(1111111)
  //         var datas = JSON.parse(buf.slice(0, bytes).toString());
  //         console.log(datas.length);
  //         for (var i = 0; i < datas.length; i++) {
  //           dataArr.push(datas[i]);
  //         }
  //       };

  //         console.log(222222)
  //         console.log(dataArr)
  //         console.log("-----------------------------");
  //       fs.appendFile('address.json', JSON.stringify(dataArr) ,  function(err) {});
  //   });

  // })


})



 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
