import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createTodoApi,
  deleteTodoApi,
  getTodosApi,
  updateTodoApi,
} from '../apis/todo'
import TodoItem from '../components/TodoItem'
import {
  CommonButton,
  CommonH1,
  CommonH2,
  Inner,
  InputBox,
  Layout,
  LogoImg,
  NoData,
  RowWrap,
  SmallButton,
} from '../components/common'

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

  const logoutHandle = () => {
    localStorage.setItem('token', '')
    document.location.reload()
  }

  return (
    <Layout>
      <Inner>
        <LogoImg src='/logo_wanted.png' />
        <CommonH1>TODO LIST</CommonH1>

        <CommonButton type='button' onClick={logoutHandle} color='black'>
          로그아웃
        </CommonButton>
        <div style={{ paddingTop: 20 }}>
          <CommonH2>Todo Add</CommonH2>
          <RowWrap>
            <InputBox
              type='text'
              name='newTodo'
              data-testid='new-todo-input'
              onKeyUp={e => setTodoText(e.target.value)}
              placeholder='Todo를 추가하세요.'
              noMB={true}
            />
            <SmallButton
              type='button'
              onClick={createTodo}
              disabled={!(todoText.length > 0)}
              data-testid='new-todo-add-button'
              width='auto'
              color='rgb(67, 139, 255)'
            >
              추가
            </SmallButton>
          </RowWrap>
        </div>
        <div>
          <CommonH2>Todo List</CommonH2>
          {todoArr.length === 0 ? (
            <NoData>
              등록된 Todo가 없어요. <br />
              Todo를 등록해주세요!
            </NoData>
          ) : (
            todoArr.map((item, idx) => {
              return (
                <TodoItem
                  key={idx}
                  index={idx + 1}
                  item={item}
                  update={updateTodo}
                  delete={deleteTodo}
                />
              )
            })
          )}
        </div>
      </Inner>
    </Layout>
  )
}

export default TodoList
