const mongoose = require('mongoose');

module.exports = (dbString) => {
  return mongoose.connect(dbString);
};
