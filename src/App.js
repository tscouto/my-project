import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useState } from 'react';
// import './App.css';
//import Evento  from './components/Evento';
//import Form from './components/Form';
//import Condicional from './components/Condicional';
//import Outralista from './components/Outralista';
// import HelloWolrd from './components/HelloWolrd'
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List';
// import Frase from './components/Frase';
// import SeuNome from './components/SeuNome';
// import Saudacao from './components/Saudacao';

function App() {

    return (
        <Router>
            <ul>
                <li><Link to='/'>Home</Link></li>

            </ul>
        </Router>
    );
}

export default App;

  //const [nome, setNome] = useState()
    //const meusItens = ['React', 'Vue', 'Angular']

//  <Frase />
            // <Frase />
            // <SayMyName nome='Tiago' />
            // <SayMyName nome='João' />
            // const nome = "Maria"

            // <SayMyName nome={nome} />
            // <Pessoa nome='Tiago' idade='33' profissao='Engenheiro de Software' foto='https://via.placeholder.com/150' />
            // <List/>
//  <Evento />
// <Form/>
//  <Condicional/>
//<Outralista itens={meusItens}/>
//<Outralista itens={[]}/>
//<h1>Renderização de Lista</h1>
//<SeuNome setNome={setNome} />
//<Saudacao nome={nome}/>
