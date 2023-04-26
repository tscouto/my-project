
import './App.css';
import Evento  from './components/Evento';
// import HelloWolrd from './components/HelloWolrd'
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List';
// import Frase from './components/Frase';

function App() {

    
    return (
        <div className='App'>
            <Evento numero="1"/>
            <Evento numero="2"/>
        </div>
    );
}

export default App;


// {/* <Frase /> */}
            // <Frase />
            // <SayMyName nome='Tiago' />
            // <SayMyName nome='João' />
            // const nome = "Maria"

            // <SayMyName nome={nome} />
            // <Pessoa nome='Tiago' idade='33' profissao='Engenheiro de Software' foto='https://via.placeholder.com/150' />
            // <List/>
