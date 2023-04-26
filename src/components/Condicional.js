import {useState} from 'react'
function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()




    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form action="">
                <input type="email" placeholder='Digite o seu e-mail...' onChange={(e)=> setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar-email</button>
            </form>

        </div>
    )

}

export default Condicional
