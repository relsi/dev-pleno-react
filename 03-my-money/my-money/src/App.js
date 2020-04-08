import React from 'react';
import useGet from './useGet';
import usePost from './usePost';
import useDelete from './useDelete';

const url = 'https://mymoney-curso-react.firebaseio.com/movimentacoes/2020-04.json';

function App() {

  const data = useGet(url);
  const [postData, post] = usePost(url);
  const [deleteData, remove] = useDelete();

  const saveNew = () => {
    post({valor:10, descricao: 'olá'});
  }

  const doRemove = () => {
    remove('https://mymoney-curso-react.firebaseio.com/movimentacoes/2020-04/-M4Qoe9jkR4L7_pT7Szz.json');
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
