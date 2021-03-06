// MainImports
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'
import api from '../../services/api'

// Styles
import './styles.css'

// Components / Assets Imports
import logoImg from '../../assets/logo.svg'

export default function Profile() {

    const [incident,setIncident] = useState([])
    const history = useHistory()

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')

    useEffect(() => {

        api.get('profile',{
            headers:{
                Authorization:ongId
            }
        })
        .then( res => {
            setIncident(res.data)
        })
        
    }, [ongId])

    async function handleDeleteIncident(id) {

        if(window.confirm('Você realmente quer deletar este caso?')){
            try{
                await api.delete(`incidents/${id}`, {
                    headers:{
                        Authorization: ongId
                    }
                })
    
                setIncident(incident.filter(incident => incident.id !== id))
    
            }catch (err){
                alert('Erro ao deletar caso, tente novamente!')
            }
        }
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (

        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem Vindo(a), {ongName}</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incident.map(incident => (  
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}