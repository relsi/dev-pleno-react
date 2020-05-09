import React from  'react';

const AddMonth = () => {
    return (
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
    )
}

export default AddMonth;