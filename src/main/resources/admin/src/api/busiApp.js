import request from '@/utils/request'

const space = '/busiApp'

export function selectByPage(query) {
  return request({
    url: space + '/selectByPage',
    method: 'get',
    params: query
  })
}

export function insert(data) {
  return request({
    url: space + '/insert',
    method: 'post',
    data
  })
}

export function selectById(query) {
  return request({
    url: space + '/selectById',
    method: 'get',
    params: query
  })
}

export function updateById(data) {
  return request({
    url: space + '/updateById',
    method: 'post',
    data
  })
}

export function deleteById(data) {
  return request({
    url: space + '/deleteById',
    method: 'post',
    data
  })
}

export function Generator(query) {
  return request({
    url: space + '/generator',
    method: 'get',
    params: query
  })
}

export function Download(query) {
  return request({
    url: space + '/downloadFile',
    method: 'get',
    params: query
  })
}

export function getAppPages(query) {
  return request({
    url: space + '/getAppPages',
    method: 'get',
    params: query
  })
}


