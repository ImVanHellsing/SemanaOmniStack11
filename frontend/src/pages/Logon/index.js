// Main Imports
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import api from '../../services/api'

// Styles
import './styles.css'

// Components / Assets Imports
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {

    const [id, setId] = useState('')

    const history = useHistory()

    async function handleLogon(e) {
        e.preventDefault()

        try{
            const res = await api.post('session',{ id })

            localStorage.setItem("ongId", id)
            localStorage.setItem("ongName", res.data.name)

            history.push('/profile')
        }catch(err){

            alert(`Falha no Login, tente novamente!`)
        }
    }
    
    return (
        <div className="logon-container">      
            <section className="form">

                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input type="text" name="userId" id="" placeholder="Sua ID"
                        alue={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#e02041"/>
                    Não tenho cadastro
                </Link>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}