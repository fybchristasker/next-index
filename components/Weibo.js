import React from 'react'
import { Grid } from '@mui/material'

const Weibo = ({ data }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {data.map((v, index) => (
          <div key={v.url} className="mb-4 flex items-center justify-between">
            <a href={v.url} className="flex items-center" target="_blank" rel="noreferrer">
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

export default Weibo
