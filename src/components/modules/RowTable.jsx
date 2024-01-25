import React from 'react'
//icons
import chart_up from '../../assets/chart-up.svg'
import chart_down from '../../assets/chart-down.svg'
//styles
import styles from './RowTable.module.css'

function RowTable({coins}) {
  return (
    <tr>
        <td>
            <div className={styles.symbol}>
                <img src={coins.image} alt={coins.name}/>
                <span>{coins.symbol.toUpperCase()}</span>
            </div>
        </td>
        <td>{coins.name}</td>
        <td>${coins.current_price.toLocaleString()}</td>
        <td className={coins.price_change_percentage_24h > 0 ? styles.success : styles.error}>{coins.price_change_percentage_24h.toFixed(2)}%</td>
        <td>{coins.total_volume.toLocaleString()}</td>
        <td><img  src={coins.price_change_percentage_24h > 0 ? chart_up : chart_down} alt={coins.name}/></td>
        
    </tr>
  )
}

export default RowTable