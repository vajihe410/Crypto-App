import React, { useEffect, useState } from 'react'
//components
import TableCoin from '../modules/TableCoin'
import Pagination from '../modules/Pagination.jsx';
import Search from '../modules/Search.jsx';

import { getCoinList } from '../../services/cryptoApi.js';

function HomePage() {

    const [coins,setCoins] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [currency , setCurrency] = useState("usd")

    useEffect( () => {
   
        setIsLoading(true)
        const getData =async () => {
          try {
            const response = await fetch(getCoinList(page,currency))
            const json = await response.json()
            setCoins(json)
            setIsLoading(false)
          } catch (error) {
            console.log(error)
          }
        }
        getData()
    } ,[page,currency])

  return (
    <div>
        <Search currency={currency} setCurrency={setCurrency}/>
        <TableCoin coins={coins} isLoading={isLoading}/>
        <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default HomePage