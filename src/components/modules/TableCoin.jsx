import React from 'react'
import RowTable from './RowTable'

function TableCoin({coins}) {
  return (
    
    <table>
        <thead>
            <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Volume</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {coins.map(coin => <RowTable key={coin.id} coins={coin} />)}    
        </tbody>
    </table>
  )
}

export default TableCoin