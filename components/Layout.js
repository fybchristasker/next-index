import React from 'react'
import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Container maxWidth="md">
        <div className="absolute left-6 top-4 sm:left-36 md:left-40">
          <div className="flex cursor-pointer items-center" role="presentation" onClick={() => router.push('/')}>
            <img src="/logo.png" alt="" className="mr-2 h-8 w-8 rounded-full" />
            <div className="font-mono text-lg font-bold">白羽</div>
          </div>
        </div>
        <div className="absolute right-6 top-4 flex items-center sm:right-36 md:right-48">
          <div role="presentation" className="cursor-pointer font-bold hover:text-gray-500" onClick={() => router.push('/weibo')}>
            全部热搜
          </div>
          <ThemeSwitch />
        </div>
      </Container>
      {children}
    </>
  )
}

export default Layout
