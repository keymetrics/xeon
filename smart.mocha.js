var fs        = require('fs');
var Alert     = require('../../lib/utils/alert.js');
var Plan      = require('./helpers/plan.js');

var checker = function(filename, data, positive) {
  describe('Check JSONs in folder', () {
    var tester = new Alert({
      mode  : 'smart',
      func  : () => { done(new Error('Should not be called')); }
    }
  });
  console.log(filename);
  /*for (i; i < data.length; i++) {
  
  }*/
  }
}

fs.readdir('samples/negative', (err, data) => {
  if (err) throw err;
  data.forEach((el) => {
    fs.readFile('samples/negative/' + el, (err, data) => {
      if (err) throw err;
      checker(el, JSON.parse(data), false);
    });
  });
});
