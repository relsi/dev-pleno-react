import React from 'react';
import useGet from './useGet'
import usePost from './usePost'

const url = 'https://mymoney-curso-react.firebaseio.com/movimentacoes/2020-04.json';

function App() {

  const data = useGet(url);
  const [postData, post] = usePost(url);



  const saveNew = () => {
    post({valor:10, descricao: 'olá'});
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
    </div>
  );
}

export default App;
