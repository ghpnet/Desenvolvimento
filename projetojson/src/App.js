import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() { 
  const url = "http://localhost:3001/products"

   const [listaProdutos,setListaProdutos] = useState([]);
   // Formato gerou erro na Console do Browser, seguir orientação do React conforme modelo abaixo
   //useEffect (async () => {
    // Código de negócio
   //}, []);
   useEffect(() => {
    async function fetchData() {
     // You can await here -const response = await MyAPI.getData(someId);
     // Retorna um JSON puro. estamos usando Fetch API JAvaScript, mais recente que a axios.
     const resposta = await fetch (url)
     // Vamos converter em objeto para usar no JavaScript e fazer interação no front end com método map().
     const dadosProdutoObj = await resposta.json()
     setListaProdutos (dadosProdutoObj)
    }
    fetchData();
   }, []); // Or [] if effect doesn't need props or state
   console.log ("Lista de Produtos carregada no React: " , listaProdutos)

  return (
    <div className="App">
    <h1>Lista de produtos</h1>
    <ul>
    {listaProdutos?.map ((item) => (
     <li key={item.id}> {item.name} - R$: {item.price} </li>
    )) }
   </ul>

    </div>
  );
}


export default App;