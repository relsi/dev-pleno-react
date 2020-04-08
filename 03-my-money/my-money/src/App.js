import React, {useEffect, useState, useReducer} from 'react';
import axios from 'axios'

const url = 'https://mymoney-curso-react.firebaseio.com/movimentacoes/2020-04.json';

const reducer = (state, action) => {

  if (action.type === 'REQUEST') {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === 'SUCCESS') {
    return {
      ...state,
      loading: false,
      data: action.data
    }
  }

  return state;

}

function App() {

  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {}
  });

  useEffect(() => {
    
    dispatch({type: 'REQUEST'});

    axios
      .get(url)
      .then(response => {
        dispatch({type: 'SUCCESS', data: response.data});
      });

  }, []);

  if (data.loading) {
    return <p>Loading....</p>
  }
  return (
    <div>
      <h1>MyMoney</h1>
      
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
