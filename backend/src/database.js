const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log('DB is Connected'))
  .catch(err => console.error(err));

module.exports = mongoose;