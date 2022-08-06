import React from 'react'
import { Grid } from '@mui/material'

const Bilibili = ({ data }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {data.map((v, index) => (
          <div key={v.url} className="mb-4 flex items-center justify-between">
            <a href={v.url} className="flex items-center" target="_blank" rel="noreferrer">
              <div className="w-6 text-sm text-orange-500">{index + 1}</div>
              {v.title}
            </a>
            {v.icon && <img src={v.icon} alt="" className="h-5 w-5" />}
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default Bilibili
