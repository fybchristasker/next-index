import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import axios from 'axios'

const Baidu = () => {
  const [baidu, setBaidu] = useState([])
  const getZhihu = async () => {
    await axios.get('https://tenapi.cn/baiduhot').then((res) => {
      setBaidu(res.data.list)
    })
  }
  useEffect(() => {
    getZhihu()
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        {baidu.map((v, index) => (
          <div key={v.url} className="mb-4 flex items-center justify-between">
            <a href={v.url} className="flex items-center">
              <div className="w-6">{index + 1}</div>
              {v.name}
            </a>
            <div className="text-xs text-orange-500">{(v.hot / 10000).toFixed(1)}万</div>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default Baidu
