import React from 'react'

const Destruturado = (minhaProp) => {
  return (
    <div>
        <ul>
            <li>Marca: {minhaProp.marca}</li>
            <li>KM: {minhaProp.km}</li>
            <li>Cor: {minhaProp.cor}</li>
        </ul>
        {minhaProp.zero ? (<p>Veiculo 0KM</p>) : (<p>Veiculo Usado</p>)}
    </div>
  )
}

export default Destruturado