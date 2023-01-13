import React from 'react'
import { Grid, Divider, List, ListItem, ListItemText, Card, Container } from '@mui/material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import Layout from '@/components/Layout'
import data from '@/api/zhihu'

const Index = () => {
  return (
    <Layout>
      <Container maxWidth="md" className="p-0">
        <Grid container className="pt-24 md:pt-36">
          <Grid item xs={12}>
            <Card variant="outlined" className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
              <List>
                {data.map((v, index) => (
                  <div key={v.url}>
                    <ListItem className="cursor-pointer rounded-none" onClick={() => window.open(v.url)}>
                      <div className="text-md mr-3 w-4 font-bold text-orange-500">{index + 1}</div>
                      <ListItemText
                        primary={<div className="mb-1 font-bold">{v.title}</div>}
                        secondary={
                          <div className="bg-white leading-8 text-gray-800 antialiased dark:bg-gray-900 dark:text-gray-300">
                            <div className="truncate text-xs">{v.description}</div>
                            <div className="flex items-center font-bold text-gray-400">
                              <LocalFireDepartmentIcon className="text-sm" />
                              {v.hot}
                            </div>
                          </div>
                        }
                      />
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
