import mongoose from 'mongoose';

export const connectDatabase = (): void => {
  const connectionString = process.env.MONGO_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error('MongoDB connection string is not defined');
  }
  console.debug('Connecting to MongoDB...', connectionString)
  mongoose.connect(connectionString, {
    // @ts-ignore
    // useNewUrlParser: true, useUnifiedTopology: true,
    // dbName: 'test'
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
};
