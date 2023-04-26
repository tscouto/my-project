
import './App.css';
import Evento  from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
// import HelloWolrd from './components/HelloWolrd'
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List';
// import Frase from './components/Frase';

function App() {


    return (
        <div className='App'>
            <h1>Renderização Condicional</h1>
            <Condicional/>
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
// {/* <Evento />
// <Form/> */}
