import React from 'react'
//components
import RowTable from './RowTable'
//spinner
import { RotatingLines } from 'react-loader-spinner'
//styles
import styles from './TableCoin.module.css'

function TableCoin({coins, isLoading}) {
  return (
    <div className={styles.container}>
      {isLoading ? <RotatingLines  strokeWidth="2" strokeColor="#3874ff"/> : (
        <table className={styles.table}>
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

      ) }

    </div>

  )
}

export default TableCoin