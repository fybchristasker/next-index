import React from 'react'
import { Grid } from '@mui/material'

const Zhihu = ({ data }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {data.map((v, index) => (
          <div key={v.url} className="mb-4 flex items-center justify-between">
            <a href={v.url} className="flex items-center" target="_blank" rel="noreferrer">
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
