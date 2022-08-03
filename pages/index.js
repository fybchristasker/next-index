import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import dayjs from 'dayjs'
import { Chip, IconButton, Tab, Grid, TextField, Container } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Bilibili from '@/components/Bilibili'
import Weibo from '@/components/Weibo'
import Zhihu from '@/components/Zhihu'
import Baidu from '@/components/Baidu'

const Index = () => {
  const [searchText, setSearchText] = useState('')
  const [link, setLink] = useState('https://www.google.com/search?q=')
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
    <Container maxWidth="sm">
      <div className="pt-32 text-center	text-xl text-stone-400">
        {dayjs(clock * 1000)
          .format('YYYY-MM-DD ddd')
          .toUpperCase()}
      </div>
      <div className="mt-4 flex items-center justify-center font-bold">
        <div className="text-center text-7xl text-stone-500 md:text-9xl">{dayjs(clock * 1000).format('h:mm:ss')}</div>
        <div className="ml-4 text-center text-2xl text-stone-500">{dayjs(clock * 1000).format('A')}</div>
      </div>
      <Grid container className="mt-12">
        <Grid item xs={12}>
          <Chip
            size="small"
            className="mr-2 mb-2 text-xs"
            color={link === 'https://www.google.com/search?q=' ? 'primary' : 'default'}
            label="谷歌"
            onClick={() => setLink('https://www.google.com/search?q=')}
          />
          <Chip
            size="small"
            className="mb-2 text-xs"
            color={link === ' http://www.baidu.com/s?wd=' ? 'primary' : 'default'}
            label="百度"
            onClick={() => setLink(' http://www.baidu.com/s?wd=')}
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
              endAdornment: (
                <IconButton onClick={() => window.open(`${link}${searchText}`)}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            fullWidth
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="请输入搜索内容"
          />
        </Grid>
      </Grid>
      <TabContext value={value}>
        <TabList onChange={handleChange} className="mb-6">
          <Tab label="微博热搜" value="1" />
          <Tab label="B站热搜" value="2" />
          <Tab label="知乎热搜" value="3" />
          <Tab label="百度热搜" value="4" />
        </TabList>
        <TabPanel value="1" className="p-0">
          <Weibo />
        </TabPanel>
        <TabPanel value="2" className="p-0">
          <Bilibili />
        </TabPanel>
        <TabPanel value="3" className="p-0">
          <Zhihu />
        </TabPanel>
        <TabPanel value="4" className="p-0">
          <Baidu />
        </TabPanel>
      </TabContext>
    </Container>
  )
}

export default Index
