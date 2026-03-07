import mongoose from 'mongoose';

async function connectionDB () {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    // await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/train');

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
} 
export { connectionDB };