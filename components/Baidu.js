import React from 'react'
import { Grid } from '@mui/material'
import data from '@/api/baidu'

const Baidu = () => {
  console.info(data)
  return (
    <Grid container>
      <Grid item xs={12}>
        {data.map((v, index) => (
          <div key={v.url} className="mb-4 flex items-center justify-between">
            <a href={v.url} className="flex items-center" target="_blank" rel="noreferrer">
              <div className="w-6">{index + 1}</div>
              {v.title}
            </a>
            <div className="h-8">
              <div className="ml-8 text-xs font-bold text-orange-500">{v.hot}</div>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default Baidu
