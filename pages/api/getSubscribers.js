import {connectToDatabase} from '../../config/mongodb'

export default async (req, res)=>{
  const {db, client} = await connectToDatabase(process.env.MONGODB_URI)
  if(client.isConnected()){
  const collection = db.collection('subscribers')

  const subscribers = await collection.find({}).toArray()

  return res.status('200').json(subscribers)
  }
  return res.status('500').json({ error: 'client DB is not connected' })
}