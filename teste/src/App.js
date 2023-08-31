//import logo from './logo.svg';
import './App.css';
import OficinaComponentes from './components/OficinaComponentes';
import TarefaOficina02 from './components/TarefaOficina02';
import RenderizarListas from './components/RenderizeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste de sistema em ReactJS</h1>
        <OficinaComponentes /><br />
        <TarefaOficina02 />
        <RenderizarListas />

      </header>
    </div>
  );
}

export default App;
