//import logo from './logo.svg';
import './App.css';
// import OficinaComponentes from './components/OficinaComponentes';
// import TarefaOficina02 from './components/TarefaOficina02';
// import RenderizarListas from './components/RenderizeList';
// import RenderizarListasIndice from './components/RenderizeListIndice';
// import RenderizarListasIndice from './components/RemoveList';
// import { RendereizaCondicional } from './components/RendereizaCondicional';
// import { CondicionalTernario } from './components/RenderizaIf';
import Destruturado from './components/Destruturado';

function App() {
  const carros = [
    {id: 1, marca:"Nissan",km:170952, cor:"Preta",zero:false},
    {id: 2, marca:"Fiat",km:0, cor:"Vermelho",zero:true},
    {id: 3, marca:"GM",km:168100, cor:"Vermelho",zero:false}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h3>Meu primeiro sistema em ReactJS</h3>
        {/* <OficinaComponentes /><br />
        <TarefaOficina02 />
        <RenderizarListas />
        <RenderizarListasIndice />
        <RendereizaCondicional /> 
        <CondicionalTernario />*/}
        <Destruturado marca="Nissan" km={179952} cor="Preta" zero={false} />
        <Destruturado marca="Fiat" km={0} cor="Vermelho" zero={true} />
        <h4>Testes de Cons MAP</h4>
        {carros.map ((vet) => (
              <Destruturado key={vet.id} marca={vet.marca} km={vet.km} cor={vet.cor} zero={vet.zero}/>
        )) }
        
  

      </header>
    </div>
  );
}

export default App;
