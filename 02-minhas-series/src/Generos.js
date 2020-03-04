import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Generos = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const renderizaLinha = record => {
        return (
            <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td><button>+</button> <button>-</button></td>
            </tr>
        )
    }

    if (data.length === 0) {
        return (
            <div className='container'>
                <h1>Gêneros</h1>
                <div className='alert alert-warning'>
                    Nenhum gênero cadastrado.
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Gêneros</h1>

            <table className='table table-dark'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                    {data.map(renderizaLinha)}
                </tbody>
            </table>

        </div>
    )
}

export default Generos