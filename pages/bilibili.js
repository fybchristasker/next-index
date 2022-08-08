import React from 'react'
import { Grid, ListItem, ListItemText, Card, Container } from '@mui/material'
import Layout from '@/components/Layout'
import data from '@/api/bilibili'

const Index = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Grid container className="pt-24 md:pt-36">
          <Grid item xs={12}>
            {data.map((v, index) => (
              <Card variant="outlined" key={v.url} className="cursor-pointer rounded-none" onClick={() => window.open(v.url)}>
                <ListItem key={v.url}>
                  <div className="mr-3 text-lg font-bold text-orange-500">{index + 1}</div>
                  <ListItemText primary={v.title} />
                  {v.icon && <img src={v.icon} alt="" className="ml-2 w-4" />}
                </ListItem>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Index
