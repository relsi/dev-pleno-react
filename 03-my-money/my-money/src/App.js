import React from 'react';
import Rest from './rest'

const baseURL = 'https://mymoney-curso-react.firebaseio.com/';
const { useGet, usePost, useDelete } = Rest(baseURL);

function App() {

  const data = useGet('movimentacoes/2020-04');
  const [postData, post] = usePost('movimentacoes/2020-04');
  const [deleteData, remove] = useDelete();

  const saveNew = () => {
    post({valor:10, descricao: 'olá'});
  }

  const doRemove = () => {
    remove('movimentacoes/2020-04/-M4Qoq9MgD85sQpZac_A');
  }

  if (data.loading) {
    return <p>Loading....</p>
  }

  return (
    <div>
      <h1>MyMoney</h1>

      <p>{JSON.stringify(data)}</p>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={saveNew}>Novo</button>
      <button onClick={doRemove}>Remover</button>
      <pre>{JSON.stringify(deleteData)}</pre>

    </div>
  );
}

export default App;
