import React from 'react'
import { Grid } from '@mui/material'

const Weibo = ({ data }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {data.map((v, index) => (
          <div key={v.url} className="mb-4 flex items-center justify-between">
            <a href={v.url} className="flex items-center" target="_blank" rel="noreferrer">
              <div className="w-6 text-sm text-orange-500">{index + 1}</div>
              {v.title}
              <div className="ml-2 text-xs text-gray-500">{v.hot}</div>
            </a>
            {v.icon && <img src={v.icon} alt="" className="h-8 w-8" />}
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default Weibo
