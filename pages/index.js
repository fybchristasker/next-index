import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Chip, Tab, Grid, TextField, Container } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import dayjs from '@/utils/dayjs'
import Layout from '@/components/Layout'
import Bilibili from '@/components/Bilibili'
import Weibo from '@/components/Weibo'
import Toutiao from '@/components/Toutiao'
import Baidu from '@/components/Baidu'

const Index = () => {
  const [searchText, setSearchText] = useState('')
  const [link, setLink] = useState('http://www.baidu.com/s?wd=')
  const [clock, setClock] = useState(dayjs().unix())
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      window.open(`${link}${searchText}`)
    }
  }

  useEffect(() => {
    setInterval(() => {
      setClock(dayjs().unix())
    }, 1000)
  }, [])

  return (
    <Layout>
      <Container maxWidth="md">
        <div className="text-md pt-24	text-center text-stone-400">
          {dayjs(clock * 1000)
            .format('YYYY-MM-DD dddd')
            .toUpperCase()}
          {dayjs(clock * 1000).format('A')}
        </div>
        <div className="mt-4 flex items-center justify-center font-bold">
          <div className="text-center text-7xl text-stone-600 md:text-9xl">{dayjs(clock * 1000).format('h:mm:ss')}</div>
        </div>
        <Grid container className="mt-6">
          <Grid item xs={12}>
            <Chip
              size="small"
              className="mb-2 text-xs"
              color={link === 'http://www.baidu.com/s?wd=' ? 'primary' : 'default'}
              label="百度"
              onClick={() => setLink('http://www.baidu.com/s?wd=')}
            />
            <Chip
              size="small"
              className="mr-2 mb-2 text-xs"
              color={link === 'https://www.google.com/search?q=' ? 'primary' : 'default'}
              label="谷歌"
              onClick={() => setLink('https://www.google.com/search?q=')}
            />
          </Grid>
          <Grid item xs={12} className="flex items-center">
            <TextField
              variant="outlined"
              autoFocus
              onKeyPress={onKeyPress}
              size="small"
              InputProps={{
                startAdornment: <div className="w-12">{link === 'https://www.google.com/search?q=' ? '谷歌' : '百度'}</div>,
                endAdornment: <SearchIcon className="cursor-pointer" onClick={() => window.open(`${link}${searchText}`)} />,
              }}
              fullWidth
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="请输入搜索内容"
            />
          </Grid>
        </Grid>
        <TabContext value={value}>
          <TabList onChange={handleChange} className="mb-6">
            <Tab label="微博" value="1" icon={<img src="https://weibo.com/favicon.ico" alt="" className="mr-1 h-4" />} iconPosition="start" className="p-0" />
            <Tab label="B站" value="2" icon={<img src="https://bilibili.com/favicon.ico" alt="" className="mr-1 h-4" />} iconPosition="start" className="p-0" />
            <Tab label="头条" value="3" icon={<img src="https://toutiao.com/favicon.ico" alt="" className="mr-1 h-4" />} iconPosition="start" className="p-0" />
            <Tab label="百度" value="4" icon={<img src="https://baidu.com/favicon.ico" alt="" className="mr-1 h-4" />} iconPosition="start" className="p-0" />
          </TabList>
          <TabPanel value="1" className="p-0">
            <Weibo />
          </TabPanel>
          <TabPanel value="2" className="p-0">
            <Bilibili />
          </TabPanel>
          <TabPanel value="3" className="p-0">
            <Toutiao />
          </TabPanel>
          <TabPanel value="4" className="p-0">
            <Baidu />
          </TabPanel>
        </TabContext>
      </Container>
    </Layout>
  )
}

export default Index
