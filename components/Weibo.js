import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import axios from 'axios'

const Bilibili = ({ props }) => {
  console.info(props)
  const [weibo, setWeibo] = useState([])
  const getWeibo = async () => {
    await axios.get('https://tenapi.cn/resou/', {}).then((res) => {
      setWeibo(res.data.list)
    })
  }
  useEffect(() => {
    getWeibo()
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        {weibo.map((v, index) => (
          <div key={v.url} className="mb-4 flex items-center justify-between">
            <a href={v.url} className="flex items-center">
              <div className="w-6">{index + 1}</div>
              {v.name}
            </a>
            <div className="text-xs text-orange-500">{v.hot}</div>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default Bilibili
