import React from 'react'

function TarefaOficina02() {
    const trabalho = {
        funcao: "Desenvolvedor",
        salario: "4500",
        periodo: "Vespertino"
    }
  return (
    <div><p>Função {trabalho.funcao}</p>
    <p>Salario: {trabalho.salario}</p>
    <p>Perido de trabalho: {trabalho.periodo}</p>
    Salario liquido sem o custo de 1000: {trabalho.salario - 1000}</div>
  )
}

export default TarefaOficina02