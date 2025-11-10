import './App.css';
import Cont from './components/Cont';
import Msg from './components/Msg';
import GerarSenha from './components/GerarSenha';
import CoresRandom from './components/CoresRandom';
import ListaTarefas from './components/ListaTarefas';
import JogoAdivinha from './components/JogoAdivinha';
import Cronometro from './components/Cronometro';
import MusicPlayer from './components/MusicPlayer';
import MudarTema from './components/MudarTema';
import ListaTodo from './components/ListaTo-do';
import MiniCalculadora from './components/MiniCalculadora';
import GeradorCores from './components/GeradorCores';
import GerarSenhaV2 from './components/GerarSenhaV2';
import ConversorDeMoedas from './components/ConversorDeMoedas';

function App() {
  return (
    <div className="App">
      <Cont />
      <Msg Lista={['Ola maninho :>', 'Pode não man', 'Ah lula ;/ meu presidente']}/>
      <GerarSenha />
      <CoresRandom />
      <ListaTarefas />
      <JogoAdivinha />
      <Cronometro />
      <MusicPlayer />
      <MudarTema />
      <ListaTodo />
      <MiniCalculadora />
      <GeradorCores />
      <GerarSenhaV2 />
      <ConversorDeMoedas />
    </div>
  );
}

export default App;
