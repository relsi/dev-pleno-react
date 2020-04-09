import React from 'react';
import Rest from './rest';

const baseURL = 'https://mymoney-curso-react.firebaseio.com/';
const { useGet } = Rest(baseURL);


const Months = () => {
    const data = useGet('meses');

    if (data.loading) {
        return (
            <span className="alert alert-danger">Carregando</span>
        )
    } else {

      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Mês</th>
              <th>Previsão de entrada</th>
              <th>Entrada</th>
              <th>Previsão de Saída</th>
              <th>Saída</th>
            </tr>
          </thead>
          <tbody>
            {
              Object
                .keys(data.data)
                .map( (mes) => {
                  return (
                      <tr key={mes}>
                        <td>{mes}</td>
                        <td>{data.data[mes].previsao_entrada}</td>
                        <td>{data.data[mes].entradas}</td>
                        <td>{data.data[mes].previsao_saida}</td>
                        <td>{data.data[mes].saidas}</td>
                      </tr>
                  )
                })
            }
          </tbody>
        </table>
      )
    }

}

export default Months;