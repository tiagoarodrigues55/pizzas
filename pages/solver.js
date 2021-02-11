import {useState, useEffect} from 'react'
import axios from 'axios'

function Solver(){
  const [subscribers, setSubscribers] = useState()
  useEffect(()=>{
    axios.get('/api/getSubscribers').then(res=>{
      setSubscribers(res.data)
    })
  },[])
  return(
    <div>

    </div>
  )
}