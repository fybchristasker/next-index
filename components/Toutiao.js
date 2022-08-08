import React from 'react'
import { Grid } from '@mui/material'
import data from '@/api/toutiao'

const Toutiao = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {data.slice(0, 10).map((v, index) => (
          <div key={v.url} className="mb-2 flex items-center justify-between">
            <a href={v.url} className="flex items-center" target="_blank" rel="noreferrer">
              <div className="w-6 text-sm text-orange-500">{index + 1}</div>
              {v.title}
              <div className="ml-2 text-xs text-gray-500">{v.hot}</div>
            </a>
            <div className="flex h-8 items-center">{v.icon && <img src={v.icon} alt="" className="w-6" />}</div>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default Toutiao
