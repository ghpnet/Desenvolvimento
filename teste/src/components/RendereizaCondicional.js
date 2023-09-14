import React from 'react'
import { useState} from 'react'

export const RendereizaCondicional = () => {
    //const [varTeste] = useState (false);
    const [varTeste] = useState (true);
  return (
    <div>
        <h3>Item sera mostrado dependendo da condição.</h3>
        {/*Condicional mais simples do react */}
        {varTeste &&<p>Se a varivael for verdadeira sera mostrada</p>}
        {/* Negando o valor da varivael */}
        {!varTeste&& <p>Se variavel <b>não</b> for verdadeira sera mostrado</p>}
    </div>
  )
}
