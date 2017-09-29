var express = require(‘express’);
var fs = require(‘fs’);
var mongoose = require(‘mongoose’);
var Schema = mongoose.Schema;
var multer = require('multer');


mongoose.connect(‘url_here’);



app.use(multer({ dest: ‘./uploads/’,
 rename: function (fieldname, filename) {
   return filename;
 },
}));


app.post(‘/api/photo’,function(req,res){
 var newItem = new Item();
 newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
 newItem.img.contentType = ‘image/png’;
 newItem.save();
k;});

app.listen(3000, function() {
  console.log("Baby app alive!");
});