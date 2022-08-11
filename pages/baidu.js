import React, { useEffect } from 'react'
import { Grid, Divider, List, ListItem, ListItemText, Card, Container } from '@mui/material'
import axios from 'axios'
import Layout from '@/components/Layout'
import { useView } from '@/utils/store'
import HotMenu from '@/components/HotMenu'

const Index = () => {
  const [view, viewSet] = useView()
  useEffect(() => {
    axios.get('http://47.101.44.25:9000/baidu').then((res) => {
      viewSet(['news', 'baidu'], res.data)
    })
  }, [])

  return (
    <Layout>
      <Container maxWidth="md" className="p-0">
        <Grid container className="pt-24 md:pt-36">
          <Grid item xs={12}>
            <Card variant="outlined" className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
              <HotMenu />
              <List>
                {view.news.baidu.map((v, index) => (
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
