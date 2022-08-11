import React from 'react'
import { Button, CardContent, Grid } from '@mui/material'
import { useRouter } from 'next/router'

const Layout = () => {
  const router = useRouter()

  return (
    <CardContent>
      <Grid container>
        {[
          ['微博', '/weibo'],
          ['B站', '/bilibili'],
          ['百度', '/baidu'],
          ['知乎', '/zhihu'],
          ['头条', '/toutiao'],
        ].map((v) => (
          <Grid item md={2} xs={3} key={v[1]} className="p-1">
            <Button
              startIcon={<img src={`https:/${v[1]}.com/favicon.ico`} alt="" className="h-4" />}
              variant={router.pathname.indexOf(v[1]) > -1 ? 'contained' : 'outlined'}
              disableElevation
              fullWidth
              onClick={() => router.push(v[1])}
            >
              {v[0]}
            </Button>
          </Grid>
        ))}
      </Grid>
    </CardContent>
  )
}

export default Layout
