import {connectToDatabase} from '../../config/mongodb'

export default async (req, res)=>{
  const {db, client} = await connectToDatabase(process.env.MONGODB_URI)
  if(client.isConnected()){

  const collection = db.collection('subscribers')

  await collection.insertOne({...req.body, subscriberAt: new Date()})

  return res.status('200').json({eai:true})
  }
  return res.status('500').json({ error: 'client DB is not connected' })

}