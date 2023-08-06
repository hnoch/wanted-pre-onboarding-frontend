import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signinApi } from '../apis/auth'
import {
  Inner,
  InputBox,
  Layout,
  LogoImg,
  CommonButton,
  SubmitButton,
} from '../components/common'

const Signin = () => {
  const navigate = useNavigate()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [btnDisabled, setBtnDisabled] = React.useState(true)

  const submitHandle = async e => {
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

    await signinApi({
      email: val_email,
      password: val_pw,
    })
      .then(res => {
        console.log('signin res', res)
        if (res.status === 200) {
          localStorage.setItem('token', res.data.access_token)
          document.location.reload()

          setTimeout(() => {
            navigate('/todo')
          }, 1000)
        }
      })
      .catch(err => {
        console.log('signin err', err)

        const errRes = err.response

        if (errRes.status === 404) {
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
        <form method='POST' onSubmit={submitHandle}>
          <InputBox
            type='text'
            name='email'
            data-testid='email-input'
            placeholder='abc@wanted.com'
            onKeyUp={e => setEmail(e.target.value)}
          />
          <InputBox
            type='password'
            name='password'
            data-testid='password-input'
            placeholder='********'
            minLength={8}
            onKeyUp={e => setPassword(e.target.value)}
          />
          <SubmitButton
            type='submit'
            disabled={btnDisabled}
            data-testid='signin-button'
          >
            로그인
          </SubmitButton>
        </form>

        <CommonButton type='button' onClick={() => navigate('/signup')}>
          회원가입
        </CommonButton>
      </Inner>
    </Layout>
  )
}

export default Signin
