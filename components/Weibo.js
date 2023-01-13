import React from 'react'
import { Grid } from '@mui/material'
import data from '@/api/weibo'

const Weibo = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {data.slice(0, 10).map((v, index) => (
          <div key={v.url} className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 text-sm text-orange-500">{index + 1}</div>
              <a href={v.url} target="_blank" rel="noreferrer">
                {v.title}
              </a>
              <div className="ml-2 hidden text-xs text-gray-500 md:block">{v.hot}</div>
            </div>
            <div className="flex h-8 items-center">{v.icon && <img src={v.icon} alt="" className="w-8" />}</div>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default Weibo
