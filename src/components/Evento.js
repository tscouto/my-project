import Button from "./evento/Button"
function Evento() {

    function meuEvento() {
        console.log(`Opa, fui ativado `)
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento!')
    }
    return(
            <>
                <p>Clique para disparar um evento:</p>
                <Button event={meuEvento} text='Primeiro Evento' />
                <Button event={segundoEvento} text='Segundo Evento'/>

            </>
    )
}

export default Evento

// {/* <button onClick={meuEvento}>Ativar!</button> */}
