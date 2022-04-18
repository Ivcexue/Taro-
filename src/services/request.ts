import HttpRequest from './http'
// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const BASE_URL = process.env.BASE_URL || ''
console.log(BASE_URL, 'BASE_URL...')
const request = new HttpRequest(BASE_URL)

export default request
