import {useState} from 'react'
function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function limparEmail() {

        setUserEmail('')

    }


    function enviarEmail(e) {
        const input = document.querySelector('input')
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
        input.value = ''
    }

    function limparEmail() {
        setUserEmail('')
    }
    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form action="">
                <input type="email" placeholder='Digite o seu e-mail...' onChange={(e)=> setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar-email</button>
                {userEmail && (
                    <div>
                       <p>O e-mail do usuario e:{userEmail}</p>
                       <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}

            </form>

        </div>
    )

}

export default Condicional
