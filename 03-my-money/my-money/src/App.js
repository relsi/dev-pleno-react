import React from 'react';
import Rest from './rest';
import Header from './elements/Header';
import Months from './Months';
import AddMonth from './AddMonth';

const baseURL = 'https://mymoney-curso-react.firebaseio.com/';
const { useGet, usePost, useDelete } = Rest(baseURL);

function App() {

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
      <Header />
      <div className="container">
        <AddMonth />
        <Months />
      </div>
    </div>
  );
}

export default App;
