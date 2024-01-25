import React, { useEffect, useState } from 'react'
//components
import TableCoin from '../modules/TableCoin'
import Pagination from '../modules/Pagination.jsx';

import { getCoinList } from '../../services/cryptoApi.js';

function HomePage() {

    const [coins,setCoins] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [page,setPage] = useState(1)

    useEffect( () => {
        setIsLoading(true)
        const getData =async () => {
            const response = await fetch(getCoinList(page))
            const json = await response.json()
            setCoins(json)
            setIsLoading(false)
        }
        getData()
    } ,[page])

  return (
    <div>
        <TableCoin coins={coins} isLoading={isLoading}/>
        <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default HomePage