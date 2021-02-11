import {useState, useEffect} from "react"
import Styles from '../styles/index'
import logo from '../assets/logo.jpg'
import pizza from '../assets/pizza.jpeg'
import axios from 'axios'
import ReactWhatsapp from 'react-whatsapp'
function Home(){
  const [formData, setFormData] = useState({pizza: '', name: '', username: '', password: '', adress: '', transactionId: ''})
  function handleSubmit(event){
    event.preventDefault()

    if(formData.pizza === '' ||formData.name === '' ||formData.username === '' ||formData.password === '' ||formData.adress === '' ||formData.transactionId === '' ){
      alert('Preencha todos os campos antes de enviar')
      return
    }
    axios.post('/api/subscribe', formData).then(res=>{
      alert('Sua solicitação foi recebida com sucesso!')
    })
    console.log(formData)
  }
  function handleSelectpizza(event){
    const {value} = event.target
    setFormData({pizza: value, name: formData.name, username: formData.username, password: formData.password, adress: formData.adress, transactionId: formData.transactionId})
  }
  function handleName(event){
    const {value} = event.target
    setFormData({pizza: formData.pizza, name: value, username: formData.username, password: formData.password, adress: formData.adress, transactionId: formData.transactionId})
  }
  function handleUsername(event){
    const {value} = event.target
    setFormData({pizza: formData.pizza, name: formData.name, username: value, password: formData.password, adress: formData.adress, transactionId: formData.transactionId})
  }
  function handlePassword(event){
    const {value} = event.target
    setFormData({pizza: formData.pizza, name: formData.name, username: formData.username, password: value, adress: formData.adress, transactionId: formData.transactionId})
  }
  function handleAdress(event){
    const {value} = event.target
    setFormData({pizza: formData.pizza, name: formData.name, username: formData.username, password: formData.password, adress: value, transactionId: formData.transactionId})
  }
  function handleTransactionId(event){
    const {value} = event.target
    setFormData({pizza: formData.pizza, name: formData.name, username: formData.username, password: formData.password, adress: formData.adress, transactionId: value})
  }
  return(
    <div>
          <Styles>
       
          <img src={pizza} style={{width:"160px",height:"160px"}}/>
      <p>
      Pizzas com qualidade de pizzaria, com praticidade de fastfood<br/>
      Assine uma das nossas pizzas e não se preocupe com o jantar!<br/>
      </p>
      <form onSubmit={handleSubmit}>

      <select className="pizzas" id="pizzas" value={formData.pizza ? formData.pizza:''} onChange={handleSelectpizza} >
        <option value="">Escolha uma pizza</option>
        <option value="mussarela">Mussarela - R$30,00</option>
        <option value="calabreza">Calabreza - R$30,00</option>
        <option value="marguerita">Marguerita - R$30,00</option>
        <option value="portuguesa">Portuguesa - R$30,00</option>
      </select><br/>
        <input type="text" onChange={handleName} placeholder="Nome completo" /> <br/>
        <input type="text" onChange={handleUsername} placeholder="Username do khan" /> <br/>
        <input type="password" onChange={handlePassword} placeholder="Senha do khan" /> <br/>
        <input type="text" onChange={handleAdress} placeholder="Endereço"/> <br/>
        <p>
        Para iniciarmos os processos de entrega é necessário realizar o pagamento, aceitamos:<br/>
        Pix - CPF: 368.637.608-35 <br/>
        {/* Bitcoin*:<br/>
        *Cotação atual com desconto: R$300.000,00<br/> */}
        </p>
    <input type="text" onChange={handleTransactionId} placeholder="Id da transação"/> <br/>
    {formData.pizza === '' ||formData.name === '' ||formData.username === '' ||formData.password === '' ||formData.adress === '' ||formData.transactionId === '' ? null:
    <ReactWhatsapp  number="+5511992481655" message={`Olá, meu nome é ${formData.name}, gostaria de uma pizza de ${formData.pizza}`} >Enviar</ReactWhatsapp>
    
    }
  </form>

  </Styles>

    </div>
  )
}

export default Home