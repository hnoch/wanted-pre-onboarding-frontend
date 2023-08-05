import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signupApi } from '../apis/auth'

const Signup = () => {
  const navigate = useNavigate()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [btnDisabled, setBtnDisabled] = React.useState(true)

  const submitHandle = e => {
    e.preventDefault()

    const val_email = e.target.email.value
    const val_pw = e.target.email.value

    // NOTE 한번 더 체크
    if (!val_email.includes('@')) {
      alert('이메일 형식이 올바르지 않습니다.')
      return
    } else if (val_pw.length < 8) {
      alert('8자 이상의 비밀번호를 입력해주세요.')
      return
    }

    signupApi({
      email: val_email,
      password: val_pw,
    })
      .then(res => {
        console.log('signup res', res)
        if (res.status === 201) {
          navigate('/signin')
        }
      })
      .catch(err => {
        console.log('signup err', err)

        const errRes = err.response

        if (errRes.status === 400) {
          alert(errRes.data.message)
          return
        }
      })
  }

  React.useEffect(() => {
    if (email.includes('@') && password.length >= 8) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
  }, [email, password])

  // NOTE 로컬스토리지 체크
  React.useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      navigate('/todo')
    }
  }, [])

  return (
    <div>
      <h1>회원가입</h1>
      <form method='POST' onSubmit={submitHandle}>
        <input
          type='text'
          name='email'
          data-testid='email-input'
          placeholder='abc@wanted.com'
          onKeyUp={e => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          name='password'
          data-testid='password-input'
          placeholder='********'
          minLength={8}
          onKeyUp={e => setPassword(e.target.value)}
        />
        <br />
        <button
          type='submit'
          disabled={btnDisabled}
          data-testid='signup-button'
        >
          가입하기
        </button>
      </form>
    </div>
  )
}

export default Signup
