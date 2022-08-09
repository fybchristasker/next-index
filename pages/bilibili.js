import React from 'react'
import { Grid, Divider, List, ListItem, ListItemText, Card, Container } from '@mui/material'
import Layout from '@/components/Layout'
import data from '@/api/bilibili'

const Index = () => {
  return (
    <Layout>
      <Container maxWidth="md" className="p-0">
        <Grid container className="pt-24 md:pt-36">
          <Grid item xs={12}>
            <Card variant="outlined">
              <List>
                {data.map((v, index) => (
                  <div key={v.url}>
                    <ListItem className="cursor-pointer rounded-none" onClick={() => window.open(v.url)}>
                      <div className="text-md mr-3 w-4 font-bold text-orange-500">{index + 1}</div>
                      <ListItemText primary={v.title} />
                      {v.icon && <img src={v.icon} alt="" className="w-4" />}
                    </ListItem>
                    <Divider />
                  </div>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Index
