/* eslint-disable @typescript-eslint/no-var-requires */
import mongoose from 'mongoose'
require('dotenv').config()

const {
  MONGO_CONN_URI
} = process.env

export const connectToDb = ():void => mongoose.connect(MONGO_CONN_URI, () => {
  console.log('Successfully connected to MongoDB instance')
})
