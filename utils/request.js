import fetch from 'isomorphic-unfetch'

// const API_ROOT_REMOTE = process.env.NODE_ENV === 'development' ? 'http://localhost:8082' : 'https://api.lingti.paiyou.co'
const API_ROOT_REMOTE = 'http://hot.fybchristasker.cn/api/v1'
const headers = () => {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, PATCH, DELETE',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}

const body = (data) => {
  return {
    ...data,
  }
}

const parseResponse = async (res) => {
  try {
    const json = await res.json()
    if (res.status >= 400) {
      json.status = res.status
    }
    return json
  } catch (error) {
    console.info('ping')
  }
  return false
}

export const get = async (path) => {
  const url = `${API_ROOT_REMOTE}/${path}`
  const res = await fetch(url, {
    method: 'GET',
    headers: headers(),
  })
  const content = await parseResponse(res)
  return content
}

export const requestMethod = (method) => async (path, data) => {
  const res = await fetch(`${API_ROOT_REMOTE}/${path}`, {
    method,
    headers: headers(),
    body: JSON.stringify(body(data)),
  })
  const content = await parseResponse(res)
  return content
}

export const post = requestMethod('POST')
export const put = requestMethod('PUT')
export const httpDelete = requestMethod('DELETE')
