//the good ol connector using default.json to grab URI of MongoDB/User/Pass
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
//default.json hold key/secret
mongoose.set('useFindAndModify', false);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
