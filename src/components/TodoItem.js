import React from 'react'

const TodoItem = props => {
  const [updateMode, setUpdateMode] = React.useState(false)

  const [updText, setUpdText] = React.useState(props.item.todo)
  const [updCheck, setUpdCheck] = React.useState(props.item.isCompleted)

  const todoUpdate = () => {
    setUpdateMode(false)
    props.update(props.item.id, updCheck, updText)
  }

  const cancelUpdate = () => {
    setUpdateMode(false)
    setUpdText(props.item.todo)
    setUpdCheck(props.item.isCompleted)
  }

  return (
    <div>
      <li>
        <label>
          <input
            type='checkbox'
            name='upd_check'
            disabled={!updateMode}
            checked={updCheck ? true : false}
            onChange={e => setUpdCheck(e.target.checked)}
          />
          {updateMode ? (
            <input
              type='text'
              name='upd_text'
              onChange={e => setUpdText(e.target.value)}
              data-testid='modify-input'
              value={updText}
            />
          ) : (
            <span>{props.item.todo}</span>
          )}
        </label>
        {updateMode ? (
          <span>
            <button
              type='button'
              onClick={todoUpdate}
              data-testid='modify-button'
            >
              제출
            </button>
            <button
              type='button'
              onClick={cancelUpdate}
              data-testid='delete-button'
            >
              취소
            </button>
          </span>
        ) : (
          <span>
            <button
              type='button'
              onClick={() => setUpdateMode(true)}
              data-testid='modify-button'
            >
              수정
            </button>
            <button
              type='button'
              onClick={() => props.delete(props.item.id)}
              data-testid='delete-button'
            >
              삭제
            </button>
          </span>
        )}
      </li>
    </div>
  )
}

export default TodoItem
