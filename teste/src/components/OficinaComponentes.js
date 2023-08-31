import React from 'react'

function OficinaComponentes() {
    let nome = "Gabriel"
    const empregado = {
        nome: "Ar Lindo",
        idade: "24",
        funcao: "vagabundo"
    }

    const funcaoEcecutada = (event) =>{
        console.log("Ai que gostoso")
    }

    const funcaoRendereizada = (opcao) =>{
        if(opcao == 1){
            return <h4>Opção fornecida foi igual a 1</h4>
        }else{
            return <h4>Opção fornecida diferente de 1</h4>
        }
    }
  return (
    <>
    <div>Teste</div>
    <h3>Olá {nome}, você conhece {empregado.nome}, porque ele é um {empregado.funcao}</h3>
    <p>{console.log("Clica no meu botao")}</p>
    <button onClick={funcaoEcecutada}> CLique aqui</button>
    {funcaoRendereizada(1)}
    {funcaoRendereizada(4)}
    </>
  )
}

export default OficinaComponentes