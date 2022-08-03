import React from 'react'
import { Box, Container } from '@mui/material'
import { useRouter } from 'next/router'

const Layout = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="md">
        <div className="absolute left-12 top-6 sm:left-36 md:left-48">
          <div className="flex items-center" role="presentation" onClick={() => router.push('/')}>
            <img src="/logo.png" alt="" className="mr-2 h-10 w-10 rounded-full" />
            <div className="font-mono text-2xl font-bold">白羽搜索</div>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Layout
