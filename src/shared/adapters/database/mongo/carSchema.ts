import { Schema, model, Document } from 'mongoose'

export interface ICarSchema extends Document {
  _id: string
  brand?: string,
  model?: string,
  year?: number,
  fuelType?: string,
  color?: string,
  price?: number
}

const CarSchema = new Schema({
  _id: String,
  brand: String,
  model: String,
  year: Number,
  fuelType: String,
  color: String,
  price: Number
}, { timestamps: true })

export const CarModel = model<ICarSchema>('Car', CarSchema)
