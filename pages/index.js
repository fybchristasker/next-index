import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Chip, IconButton, Grid, TextField, Container } from '@mui/material'

export default function Index() {
  const [searchText, setSearchText] = useState('shit')
  const [link, setLink] = useState('https://www.google.com/search?q=')
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      window.open(`${link}${searchText}`)
    }
  }

  return (
    <Container maxWidth="sm" className="pt-64">
      <Grid container>
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
    </Container>
  )
}
