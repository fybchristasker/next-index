import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import axios from 'axios'

const Zhihu = () => {
  const [zhihu, setZhihu] = useState([])
  const getZhihu = async () => {
    await axios.get('https://tenapi.cn/zhihuresou').then((res) => {
      setZhihu(res.data.list)
    })
  }
  useEffect(() => {
    getZhihu()
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        {zhihu.map((v, index) => (
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

export default Zhihu
