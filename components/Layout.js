import React from 'react'
import { Box, Container } from '@mui/material'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="md">
        <div className="absolute left-6 top-4 sm:left-36 md:left-48">
          <div className="flex cursor-pointer items-center" role="presentation" onClick={() => router.push('/')}>
            <img src="/logo.png" alt="" className="mr-2 h-8 w-8 rounded-full" />
            <div className="font-mono text-lg font-bold">白羽</div>
          </div>
        </div>
        <div className="absolute right-6 top-5 sm:right-36 md:right-48">
          {[
            ['微博', '/weibo'],
            ['B站', '/bilibili'],
            ['百度', '/baidu'],
            ['知乎', '/zhihu'],
            ['头条', '/toutiao'],
          ].map((v) => (
            <span role="presentation" key={v} className="mr-4 cursor-pointer font-medium hover:text-gray-600" onClick={() => router.push(v[1])}>
              {v[0]}
            </span>
          ))}
        </div>
      </Container>
      {children}
    </Box>
  )
}

export default Layout
