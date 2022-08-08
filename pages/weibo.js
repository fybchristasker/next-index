import React from 'react'
import { Grid, ListItem, ListItemText, CardContent, Card, Container } from '@mui/material'
import Layout from '@/components/Layout'
import data from '@/api/weibo'

const Index = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Grid container className="pt-36">
          <Grid item xs={12}>
            {data.map((v, index) => (
              <Card variant="outlined" key={v.url} className="cursor-pointer rounded-none" onClick={() => window.open(v.url)}>
                <CardContent>
                  <ListItem key={v.url}>
                    <div className="mr-3 text-lg font-bold text-orange-500">{index + 1}</div>
                    <ListItemText
                      primary={
                        <div className="flex items-center font-bold">
                          {v.title}
                          <div className="ml-2 text-xs text-gray-500">{v.hot}</div>
                        </div>
                      }
                    />
                    {v.icon && <img src={v.icon} alt="" className="ml-2 w-8" />}
                  </ListItem>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Index
