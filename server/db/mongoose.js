var  mongoose = require('mongoose');

// ensure mongoose will work with promises.
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoAppExp');

// Since we are using ES6 and the module name and the export name are similar
// we could put it in one line(instead of what is commented below).
module.exports = {mongoose};

/*module.exports = {
  mongoose: mongoose
};*/
