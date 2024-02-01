import React, { useEffect, useState } from 'react'
//components
import TableCoin from '../modules/TableCoin'
import Pagination from '../modules/Pagination.jsx';
import Search from '../modules/Search.jsx';
import Modal from '../modules/Modal';
//api
import { getCoinList } from '../../services/cryptoApi.js';

function HomePage() {

    const [coins , setCoins] = useState([]);
    const [isLoading , setIsLoading] = useState(true)
    const [page , setPage] = useState(1)
    const [currency , setCurrency] = useState("usd")
    const [chart , setChart ] = useState(null)

    useEffect( () => {
        console.log(chart)
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
        <TableCoin coins={coins} isLoading={isLoading} setChart={setChart}/>
        <Pagination page={page} setPage={setPage}/>
        {!!chart && <Modal chart={chart} setChart={setChart}/>}
    </div>
  )
}

export default HomePage