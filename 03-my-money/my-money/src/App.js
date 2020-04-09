import React from 'react';
import Rest from './rest'

const baseURL = 'https://mymoney-curso-react.firebaseio.com/';
const { useGet, usePost, useDelete } = Rest(baseURL);

function App() {

  const data = useGet('meses');
  //const data = useGet('movimentacoes/2020-04');
  //const [postData, post] = usePost('movimentacoes/2020-04');
  //const [deleteData, remove] = useDelete();

  const saveNew = () => {
    //post({valor:10, descricao: 'olá'});
  }

  const doRemove = () => {
    //remove('movimentacoes/2020-04/-M4Qoq9MgD85sQpZac_A');
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">MyMoney</a>
      </nav>

      <div className="container">
        <p>
          <h2>Adicionar Mês</h2>
          <select>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
          <select>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
          </select>
          <button>Adicionar</button>
        </p>


        {data.loading && <span className="alert alert-danger">Carregando</span>}

        {
          !data.loading && (
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
      </div>
      </div>
  );
}

export default App;
