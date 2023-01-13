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
        <div className="absolute right-12 top-5 sm:right-36 md:right-48">
          {[
            ['微博', '/weibo'],
            ['B站', '/bilibili'],
            ['百度', '/baidu'],
            ['知乎', '/zhihu'],
            ['头条', '/toutiao'],
          ].map((v) => (
            <span role="presentation" key={v} className="mr-4 cursor-pointer text-sm font-medium hover:text-gray-600" onClick={() => router.push(v[1])}>
              {v[0]}
            </span>
          ))}
        </div>
        <div className="absolute right-4 top-4 sm:right-24 md:right-36">
          <ThemeSwitch />
        </div>
      </Container>
      {children}
    </>
  )
}

export default Layout
