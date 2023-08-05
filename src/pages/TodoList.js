import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createTodoApi,
  deleteTodoApi,
  getTodosApi,
  updateTodoApi,
} from '../apis/todo'
import TodoItem from '../components/TodoItem'

const TodoList = () => {
  const navigate = useNavigate()

  const [todoText, setTodoText] = React.useState('')
  const [todoArr, setTodoArr] = React.useState([])

  // NOTE todo 생성
  const createTodo = () => {
    createTodoApi(todoText)
      .then(res => {
        console.log('createTodo res', res)
        if (res.status === 201) {
          setTodoText('')
          document.querySelector("input[name='newTodo']").value = ''
          getTodos()
        }
      })
      .catch(err => {
        console.log('createTodo err', err)
      })
  }

  // NOTE todo 조회
  const getTodos = () => {
    getTodosApi()
      .then(res => {
        console.log('getTodos res', res)
        if (res.status === 200) {
          setTodoArr(res.data)
        }
      })
      .catch(err => {
        console.log('getTodos err', err)
      })
  }

  // NOTE todo 수정
  const updateTodo = (idx, checked, text) => {
    console.log('idx', idx, checked, text)

    updateTodoApi(idx, {
      todo: text,
      isCompleted: checked,
    })
      .then(res => {
        console.log('updateTodo res', res)
        if (res.status === 200) {
          getTodos()
        }
      })
      .catch(err => {
        console.log('updateTodo err', err)
      })
  }

  // NOTE todo 삭제
  const deleteTodo = idx => {
    console.log('idx', idx)

    deleteTodoApi(idx)
      .then(res => {
        console.log('deleteTodo res', res)
        if (res.status === 204) {
          getTodos()
        }
      })
      .catch(err => {
        console.log('deleteTodo err', err)
      })
  }

  // NOTE 로컬스토리지 체크
  React.useEffect(() => {
    const token = localStorage.getItem('token')
    console.log('token', token)

    if (!token || token === '') {
      navigate('/signin')
    } else {
      getTodos()
    }
  }, [])

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <h2>Todo Add</h2>
        <input
          type='text'
          name='newTodo'
          data-testid='new-todo-input'
          onKeyUp={e => setTodoText(e.target.value)}
        />
        <button
          type='button'
          onClick={createTodo}
          disabled={!(todoText.length > 0)}
          data-testid='new-todo-add-button'
        >
          추가
        </button>
      </div>
      <div>
        <h2>Todo List</h2>
        {todoArr.length === 0 ? (
          <div>
            등록된 Todo가 없어요. <br />
            Todo를 등록해주세요!
          </div>
        ) : (
          todoArr.map((item, idx) => {
            return (
              <TodoItem
                key={idx}
                item={item}
                update={updateTodo}
                delete={deleteTodo}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default TodoList
