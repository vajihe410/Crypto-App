import React, { useState } from 'react'
//styles
import styles from './Modal.module.css'
//components
import Chart from './Chart'
//functions
import { convertData } from '../../helper/convertData'

function Modal({chart , setChart}) {
    const [type , setType] = useState("prices")

    const typeHandler = (event) => {
      console.log("f")
      if(event.target.tagName === "BUTTON"){
        const type = event.target.innerText.toLowerCase().replace(" ","_")
        setType(type)
      }
    }
  return (
    <div className={styles.container}>
        <span className={styles.cross} onClick={() => setChart(null)}>X</span>
        <div className={styles.chart}>
          <div className={styles.name}>
              <img src={chart.coins.image}/>
              <p>{chart.coins.name}</p>
          </div>
            <div className={styles.graph}>
                <Chart data={convertData(chart,type)} type={type}/>
            </div>
            <div className={styles.types} onClick={typeHandler}>
              <button className={type === "prices" ? styles.selected : null}>Prices</button>
              <button className={type === "market_caps" ? styles.selected : null}>Market Caps</button>
              <button className={type === "total_volumes" ? styles.selected : null}>Total Volumes</button>
            </div>
            <div className={styles.details}>
              <div>
                <p>Prices:</p>
                <span>${chart.coins.current_price}</span>
              </div>
              <div>
                <p>ATH:</p>
                <span>${chart.coins.ath}</span>
              </div>
              <div>
                <p>Total Volumes</p>
                <span>${chart.coins.market_cap}</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Modal