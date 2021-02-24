import {useState, useEffect} from "react"
import Styles from '../styles/index'
import logo from '../assets/logo.jpg'
import pizza from '../assets/pizza.jpeg'
import axios from 'axios'
import ReactWhatsapp from 'react-whatsapp'
function Home(){
  const [formData, setFormData] = useState({
    pizza: [], 
    name: '', 
    email: '', 
    adress: '', 
    transactionId: ''
  })
  const [text, setText] = useState('Escolha uma pizza')
  const [preço, setPreço] = useState(0)
  const Pizzas = {
    Calabreza: ["Calabreza", 36], 
    Mozzarella: ["Mozzarella", 29], 
    Toscana: ["Toscana", 42], 
    Marguerita: ["Marguerita", 37], 
    Moda: ["Moda", 38], 
    Pepperoni: ["Pepperoni", 35], 
    Corniccioni: ["Corniccioni", 27], 
    Argentina: ["Argentina", 31], 
    Portuguesa: ["Portuguesa", 42], 
    Formaggio: ["Formaggio", 39], 
    Zucchine: ["Zucchine", 32], 
  }
  const Pizzas2 = [
    ["Calabreza", 36], 
    ["Mozzarella", 29], 
    ["Toscana", 42], 
    ["Marguerita", 37], 
    ["Moda", 38], 
    ["Pepperoni", 35], 
    ["Corniccioni", 27], 
    ["Argentina", 31], 
    ["Portuguesa", 42], 
    ["Formaggio", 39], 
    ["Zucchine", 32], 
 ]
  function handleSubmit(event){
    event.preventDefault()

    if(formData.pizza === [] ||formData.name === '' ||formData.email === '' ||formData.adress === '' ||formData.transactionId === '' ){
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
    const pizzas = formData.pizza
    pizzas.push(value)
    pizzas.sort()
    setText('Clique no nome para remover')
    setFormData({pizza: pizzas, name: formData.name, email: formData.email, adress: formData.adress, transactionId: formData.transactionId})
    const Preço = preço + Pizzas[value][1]
    setPreço(Preço)
  }
  function removePizza(pizza){
    const index = formData.pizza.indexOf(pizza)
    const pizzas = formData.pizza
    pizzas.splice(index,1)
    pizzas.sort()
    setFormData({pizza: pizzas, name: formData.name, email: formData.email, adress: formData.adress, transactionId: formData.transactionId})
    const Preço = preço - Pizzas[pizza][1]
    setPreço(Preço)
  }
  function handleName(event){
    const {value} = event.target
    setFormData({pizza: formData.pizza, name: value, email: formData.email, adress: formData.adress, transactionId: formData.transactionId})
  }
  function handleEmail(event){
    const {value} = event.target
    setFormData({pizza: formData.pizza, name: formData.name, email: value, adress: formData.adress, transactionId: formData.transactionId})
  }

  function handleAdress(event){
    const {value} = event.target
    setFormData({pizza: formData.pizza, name: formData.name, email: formData.email, adress: value, transactionId: formData.transactionId})
  }
  function handleTransactionId(event){
    const {value} = event.target
    setFormData({pizza: formData.pizza, name: formData.name, email: formData.email, adress: formData.adress, transactionId: value})
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

     

        <input type="text" onChange={handleName} placeholder="Nome completo" /> <br/>
        <input type="text" onChange={handleEmail} placeholder="email" /> <br/>
        <input type="text" onChange={handleAdress} placeholder="Endereço"/> <br/>
        <select className="pizzas" id="pizzas" value='' onChange={handleSelectpizza} >
        <option value="">{text}</option>
        {Pizzas2.map(pizza=>(
        <option value={pizza[0]}>{`${pizza[0]} - R$${pizza[1]},00`}</option>

        ))}
        
      </select><br/>
      <div>
          {formData.pizza.map(pizza=>(
            <li onClick={()=>{
              console.log(pizza)
              return removePizza(pizza)
            }
          }>{pizza}</li>
          ))}
  </div>
          <p>Preço: R${preço},00</p>
        <p className="left">
        Para iniciarmos os processos de entrega é necessário realizar o pagamento, aceitamos:<br/><br/>
        Pix - E-mail: humreis@hotmail.com <br/><br/>
        Ou transferência Bradesco <br/> <br/>
Ag. 0133-3 <br/>
C/C: 0004334-6 <br/>
Felipe Reis Costa <br/>
CPF: 496.860.158-17 <br/>
        {/* Bitcoin*:<br/>
        *Cotação atual com desconto: R$300.000,00<br/> */}
        </p>
    <input type="text" onChange={handleTransactionId} placeholder="Id da transação"/> <br/>
    {formData.pizza === [] ||formData.name === '' ||formData.email === '' ||formData.password === '' ||formData.adress === '' ||formData.transactionId === '' ? null:
    <ReactWhatsapp  number="+55 (11) 94277-7068" message={`Olá, meu nome é ${formData.name}, gostaria de pizza(s) de ${formData.pizza.map(pizza=>pizza)} no valor de R$${preço},00`} >Enviar</ReactWhatsapp>
    
    }
    <p className="left">
    INSTRUÇÃO DE PREPARO: <br/>
<br/>
O tempo pode variar para cada forno doméstico. <br/>
<br/>
Os sabores MARGHERITA, CORNICCIONE e CALABRESA por conter cobertura mais fina assam mais rápido.  <br/>
<br/>
1. Pré aquecer por 5 min em temperatura máxima. <br/>
2. Voltar a temperatura para médio, 200 Graus. <br/>
3. Umedeçer a borda da pizza com água.    <br/>
4. Colocar a pizza CONGELADA sobre a grelha (SEM ASSADEIRA) por aproximadamente  4 a 6 minutos. <br/>
<br/>
<br/>
Dica: Quando o queijo estiver borbulhando, levante a pizza com uma faca de pão. Se ao levantar o centro dela estiver “embarrigada”, significa que ela está mole no centro. Aguarde mais 1 minuto. Ao levantar com a faca, o ideal é ela estar retinha. Buon appetito!! <br/>
    </p>
  </form>
    
  </Styles>

    </div>
  )
}

export default Home