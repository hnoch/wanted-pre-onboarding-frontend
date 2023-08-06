import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signupApi } from '../apis/auth'
import {
  CommonButton,
  Inner,
  InputBox,
  InputLabel,
  InputWarnLabel,
  Layout,
  LogoImg,
  SubmitButton,
} from '../components/common'

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
    <Layout>
      <Inner>
        <LogoImg src='/logo_wanted.png' />
        <h1>회원가입</h1>
        <form method='POST' onSubmit={submitHandle}>
          <InputLabel>이메일</InputLabel>
          <InputBox
            type='text'
            name='email'
            data-testid='email-input'
            placeholder='abc@wanted.com'
            onKeyUp={e => setEmail(e.target.value)}
          />
          {email.length > 0 && !email.includes('@') && (
            <InputWarnLabel>@를 포함한 이메일형식이어야 합니다.</InputWarnLabel>
          )}
          <InputLabel>비밀번호</InputLabel>
          <InputBox
            type='password'
            name='password'
            data-testid='password-input'
            placeholder='********'
            minLength={8}
            onKeyUp={e => setPassword(e.target.value)}
          />
          {password.length > 0 && password.length < 8 && (
            <InputWarnLabel>
              8자 이상의 비밀번호형식이어야 합니다.
            </InputWarnLabel>
          )}
          <SubmitButton
            type='submit'
            disabled={btnDisabled}
            data-testid='signup-button'
          >
            가입하기
          </SubmitButton>
          <CommonButton
            type='button'
            onClick={() => navigate(-1)}
            color='black'
          >
            뒤로가기
          </CommonButton>
        </form>
      </Inner>
    </Layout>
  )
}

export default Signup
