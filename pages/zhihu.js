import React from 'react'
import { Grid, ListItem, ListItemText, Card, Container } from '@mui/material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import Layout from '@/components/Layout'
import data from '@/api/zhihu'

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
                  <ListItemText
                    primary={<div className="mb-1 font-bold">{v.title}</div>}
                    secondary={
                      <div className="leading-8">
                        <div className="truncate text-sm">{v.description}</div>
                        <div className="flex items-center font-bold text-gray-400">
                          <LocalFireDepartmentIcon className="text-sm" />
                          {v.hot}
                        </div>
                      </div>
                    }
                  />
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
