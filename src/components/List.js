
import Item from "./Item"


function List() {

    return (
        <>
        <h1>Minha lista</h1>
        <ul>
           <Item marca='ferrari' ano_lancamento={1985}/>
           <Item marca='porshe' ano_lancamento={1964}/>
           <Item marca="Renault"/>
           <Item marca="Chevrolet" ano_lancamento={1999}/>
           <Item/>
        </ul>
        </>
    )
}

export default List
