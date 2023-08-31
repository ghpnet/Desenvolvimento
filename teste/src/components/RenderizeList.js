import React from 'react'
import { useState} from 'react'
    const RenderizarListas = () => {
        // Lista d dados, iniciando com nomes]
        const [minhaList] = useState (["Gabriel","Duda","Henrique"]);
        return (
            <div>
                {/*Lista não ordenada que ira imprimir os itens da lista
                Quando retornar objetos usar parenteses */}
                <ul>
                    { minhaList.map ((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        )  
    }
export default RenderizarListas;