import {connectToDatabase} from '../../config/mongodb'

export default async (req, res)=>{
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.collection('subscribers')

  const subscribers = await collection.findAll()

  return res.status('200').json(subscribers)
}