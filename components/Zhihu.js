import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { get } from '@/utils/request'

const Zhihu = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await get('zhihu')
    if (res) {
      setData(res.data)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        {data.slice(0, 10).map((v, index) => (
          <div key={v.url} className="mb-2 flex items-center justify-between">
            <a href={v.url} className="flex items-center" target="_blank" rel="noreferrer">
              <div className="w-6 text-sm text-orange-500">{index + 1}</div>
              {v.title}
            </a>
            <div className="h-8">
              <div className="ml-2 w-max text-xs font-bold text-orange-500">{v.hot}</div>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default Zhihu
