import './About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={StyleSheet.about}>
            <h3>O que é energia fotovoltaica?</h3>
            <p>
                Energia fotovoltaica é a energia elétrica produzida a partir da luz solar, e pode ser gerada mesmo em dias nublados ou chuvosos.<br></br>Quanto maior for a radiação solar, maior será a quantidade de eletricidade produzida.<br></br>
                A energia fotovoltaica é a energia elétrica produzida a partir da luz solar. Quanto maior a incidência de radiação solar sobre as placas solares,<br></br> maior será a quantidade de energia elétrica produzida. A energia fotovoltaica é considerada uma fonte de energias alternativas, renovável, limpa e sustentável.
            </p>

            <h3>Para que serve a placa de energia fotovoltaica?</h3>
            <p>
            A placa de energia fotovoltaica é o equipamento utilizado para captar a energia do sol e iniciar o processo de transformação em energia elétrica.
            </p>

            <h3>Qual a eficiência da energia fotovoltaica?</h3>
            <p>
            A produção de energia fotovoltaica é altamente eficiente! A eficiência de uma placa solar representa o seu potencial de conversão<br></br> da luz solar em energia elétrica por metro quadrado.
            </p>
            <Link to="/posts/create" className='botaoCriar'> Criar Post </Link>
        </div>
    )
}
export default About
