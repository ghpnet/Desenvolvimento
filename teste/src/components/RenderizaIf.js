import React from 'react'
import {useState} from "react"
export const CondicionalTernario = () => {
  const [nomeUsuario] = useState ("Gabriel")
  return (
    <div>
    <h4> Item será mostrado dependendo da condicação.</h4> 
    {nomeUsuario === "Gabriel" ? (
      <div> <p> O Nome é {nomeUsuario}</p> </div>
    ) : (<div> <p> Nome Não Localizado</p> </div>) }
    </div>
  )
}
