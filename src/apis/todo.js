import { cmnAxios } from '../libs/cmnAxios'

const cmnHeader = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
}

// NOTE todo 생성
export const createTodoApi = todoText => {
  return cmnAxios.post('/todos', { todo: todoText }, cmnHeader)
}

// NOTE todo 조회
export const getTodosApi = () => {
  return cmnAxios.get('/todos', cmnHeader)
}

// NOTE todo 수정
export const updateTodoApi = (idx, body) => {
  return cmnAxios.put(`/todos/${idx}`, body, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
}

// NOTE todo 삭제
export const deleteTodoApi = idx => {
  return cmnAxios.delete(`/todos/${idx}`, cmnHeader)
}
