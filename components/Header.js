import React from 'react'
import NextHead from 'next/head'

const Head = ({ component }) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{component.title || '白羽'}</title>
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="keywords" content="白羽" />
      <meta name="referrer" content="no-referrer" />
      <meta name="description" content={component.description || '白羽'} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
