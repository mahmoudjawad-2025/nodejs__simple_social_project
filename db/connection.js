import mongoose from 'mongoose';

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  DB Connection

async function connectionDB() {

  // establish connection using URI from .env
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nodejs_monogo');
    console.log("Database connected successfully");
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
export { connectionDB };