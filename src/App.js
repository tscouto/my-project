
import './App.css';
import HelloWolrd from './components/HelloWolrd'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Frase from './components/Frase';

function App() {

    const nome = "Maria"

    return (
        <div className='App'>
            <Frase />
            <Frase />
            <SayMyName nome='Tiago' />
            <SayMyName nome='João' />
            <SayMyName nome={nome} />
            <Pessoa nome='Tiago' idade='33' profissao='Engenheiro de Software' foto='https://via.placeholder.com/150' />
            <List/>


        </div>
    );
}

export default App;
