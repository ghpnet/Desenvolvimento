import React from 'react'
import { useState} from 'react'
    const RenderizarListasIndice = () => {
        const [aluno] = useState ([
            {id:1,nome:"Gabriel",matricula:13111985},
            {id:2,nome:"Michelle",matricula:11121989},
            {id:3,nome:"Maria Eduarda",matricula:7022009},
            {id:4,nome:"Luiz Henrique",matricula:1062016},
        ]);
        return (
            <div>
                <ul>
                    { aluno.map ((objALuno) => (
                        <li key={(objALuno.id)}>{objALuno.nome} -- {objALuno.matricula}</li>
                    ))}
                </ul>
            </div>
        )  
    }
export default RenderizarListasIndice;