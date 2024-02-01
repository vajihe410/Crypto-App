import React from 'react'
//icons
import chart_up from '../../assets/chart-up.svg'
import chart_down from '../../assets/chart-down.svg'
//styles
import styles from './RowTable.module.css'
//api
import { getChart } from '../../services/cryptoApi'

function RowTable({coins , setChart}) {

  const showChart = async () => {
      try {
        const response = await fetch(getChart(coins.id))
        const json = await response.json()
        setChart({...json , coins:coins})
      } catch (error) {
        setChart(null)
      }
    }

  return (
    <tr>
        <td>
            <div className={styles.symbol} onClick={showChart}>
                <img src={coins.image} alt={coins.name}/>
                <span>{coins.symbol.toUpperCase()}</span>
            </div>
        </td>
        <td>{coins.name}</td>
        <td>{coins.current_price.toLocaleString()}</td>
        <td className={coins.price_change_percentage_24h > 0 ? styles.success : styles.error}>{coins.price_change_percentage_24h.toFixed(2)}%</td>
        <td>{coins.total_volume.toLocaleString()}</td>
        <td><img  src={coins.price_change_percentage_24h > 0 ? chart_up : chart_down} alt={coins.name}/></td>
        
    </tr>
  )
}

export default RowTable