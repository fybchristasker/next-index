import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'

const Bilibili = () => {
  const [bilibili, setBilibili] = useState([])
  useEffect(() => {
    axios.get('https://tenapi.cn/bilihot/').then((res) => {
      if (res.status === 200) {
        setBilibili(res.data.list)
      }
    })
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        {bilibili.map((v, index) => (
          <div key={v.url} className="mb-4 flex items-center justify-between">
            <a href={v.url} className="flex items-center">
              <div className="w-6">{index + 1}</div>
              {v.name}
            </a>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default Bilibili
