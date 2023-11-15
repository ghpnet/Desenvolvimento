import './App.css';
import CssComponente from './CssComponente';
import FormularioCss from './FormularioCss';

function App() {
const modeloCSS=15
const validaCSS= true
  return (
    <div className="App">
      <header>
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJL-BwNCuZPG2ZhvMU9wkmx9zPeTuKk4akh7UQmnniHK1sGEVvg-bMStPO8iPIXg9rsE&usqp=CAU"/>

        {/* <p>
          Seja <code>mal vindo</code> a esta porra que se atualiza sozinho.
        </p>
        <a className="App-link" href="https://www.ghpnet.com.br" target="_blank" rel="noopener noreferrer">
          Visite a porra do meu site caralho!
        </a>
        <b>esopecie de if dentro do react</b>
        <h2 style={modeloCSS > 10 ? ({color:"yellow"}):({color:"blue"})}>CSS Dinamico</h2>
        <h2 style={modeloCSS < 10 ? ({color:"yellow"}):({color:"blue"})}>CSS Dinamico</h2>

        <p className = "css-componente"> Parágrafo do componente com css específico.</p>
        <h2 className={validaCSS ? "classe-dinamica-CSS" : "outra-classe-dinamica-CSS"}> Texto usando Classe Dinâmica de CSS.</h2> */}
        <FormularioCss />
      </header>
    </div>
  );
}

export default App;
