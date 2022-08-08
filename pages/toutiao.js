import React from 'react'
import { Grid, ListItem, ListItemText, CardContent, Card, Container } from '@mui/material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import Layout from '@/components/Layout'
import data from '@/api/toutiao'

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
                          {v.icon && <img src={v.icon} alt="" className="ml-2 w-6" />}
                        </div>
                      }
                      secondary={
                        <div className="leading-8">
                          <div className="truncate text-sm">{v.description}</div>
                          <div className="flex items-center font-bold text-gray-400">
                            <LocalFireDepartmentIcon className="text-sm" />
                            {`${(v.hot / 10000).toFixed(1)}万`}
                          </div>
                        </div>
                      }
                    />
                    {v.cover && <img src={v.cover} alt="" className="hidden h-28 w-48 rounded-md object-cover md:block" />}
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
