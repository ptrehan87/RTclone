const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

const path = require('path')
const fs = require('fs')

//platform code dont touch
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
   }
})