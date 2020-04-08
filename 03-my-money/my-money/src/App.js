import React from 'react';
import useGet from './useGet'

const url = 'https://mymoney-curso-react.firebaseio.com/movimentacoes/2020-04.json';

function App() {

  const data = useGet(url);
  const data2 = useGet('http://httpbin.org/ip');

  if (data.loading) {
    return <p>Loading....</p>
  }
  return (
    <div>
      <h1>MyMoney</h1>
      {JSON.stringify(data)}
      <pre>{JSON.stringify(data2)}
      </pre>
    </div>
  );
}

export default App;
