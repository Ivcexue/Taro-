import request from '../request'

export const getBookList = () => {
  return request.get('books/getFindList')
}

export const getBookDetail = (id: number) => {
  return request.post('books/getBookDetail', {
    id
  })
}
