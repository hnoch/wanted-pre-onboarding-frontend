import React from 'react'
import {
  CommonLi,
  CommonSpan,
  InputBox,
  InputCheck,
  RowWrap,
  SmallButton,
} from './common'

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
      <CommonLi>
        <RowWrap>
          <InputCheck
            type='checkbox'
            name='upd_check'
            disabled={!updateMode}
            checked={updCheck ? true : false}
            onChange={e => setUpdCheck(e.target.checked)}
          />
          {updateMode ? (
            <InputBox
              type='text'
              name='upd_text'
              onChange={e => setUpdText(e.target.value)}
              data-testid='modify-input'
              value={updText}
              noMB
            />
          ) : (
            <>
              <CommonSpan weight={800}>
                {parseInt(props.index)}. &nbsp;
              </CommonSpan>
              <CommonSpan noML>{props.item.todo}</CommonSpan>
            </>
          )}
        </RowWrap>
        {updateMode ? (
          <span>
            <SmallButton
              type='button'
              onClick={todoUpdate}
              data-testid='modify-button'
              color={'rgb(67, 139, 255)'}
            >
              제출
            </SmallButton>
            <SmallButton
              type='button'
              onClick={cancelUpdate}
              data-testid='delete-button'
              color={'orangered'}
            >
              취소
            </SmallButton>
          </span>
        ) : (
          <span>
            <SmallButton
              type='button'
              onClick={() => setUpdateMode(true)}
              data-testid='modify-button'
            >
              수정
            </SmallButton>
            <SmallButton
              type='button'
              onClick={() => props.delete(props.item.id)}
              data-testid='delete-button'
              color={'red'}
            >
              삭제
            </SmallButton>
          </span>
        )}
      </CommonLi>
    </div>
  )
}

export default TodoItem
