import React, { useState, useEffect } from 'react'
import { Grid, Divider, List, ListItem, ListItemText, Card, Container } from '@mui/material'
import Layout from '@/components/Layout'
import { get } from '@/utils/request'

const Index = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await get('bilibili')
    if (res) {
      setData(res.data)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <Container maxWidth="md" className="p-0">
        <Grid container className="pt-24 md:pt-36">
          <Grid item xs={12}>
            <Card variant="outlined" className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
              <List>
                {data.map((v, index) => (
                  <div key={v.url}>
                    <ListItem className="rounded-none">
                      <div className="text-md mr-3 w-4 font-bold text-orange-500">{index + 1}</div>
                      <ListItemText
                        primary={
                          <a href={v.url} target="_blank" rel="noreferrer">
                            {v.title}
                          </a>
                        }
                      />
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
