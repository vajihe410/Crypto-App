import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/TableCoin'
import { getCoinList } from '../../services/cryptoAPI';

function HomePage() {


    const [coins,setCoins] = useState([]);

    useEffect( () => {
        const getData =async () => {
            const response = await fetch(getCoinList())
            const json = await response.json()
            setCoins(json)
        }
        getData()
    } ,[])

  return (
    <div>
        <TableCoin coins={coins}/>
    </div>
  )
}

export default HomePage