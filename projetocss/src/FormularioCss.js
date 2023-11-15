import React, {useState} from 'react'

const FormularioCss = () => {
    const [nome, setNome] = useState("Joao")
    const [email, setEmail] = useState("teste@teste.com")
    const funcaoAjustaNome = (dadosTela) =>{
        setNome (dadosTela.target.value)
        console.log("Conteudo da variavel nome:",nome)
        //console.log("Nome foi alterado")
    }
    //console.log("Conteudo da variavel nome:",nome)

  return (
    <form >
    <div>
        <div>{nome}</div>
    <label htmlFor="nomeAluno">Nome: </label>
    <input type="text" name="nomeAluno" placeholder="Digite seu nome:" onChange={funcaoAjustaNome}/>
    </div>
    <label>
        <span>E-mail:</span>
        <input type="email" name="email" placeholder="Digite seu e-mail"/>
    </label>
    <div><input type="submit" value="Enviar" /></div>
    </form>
  )
}

export default FormularioCss