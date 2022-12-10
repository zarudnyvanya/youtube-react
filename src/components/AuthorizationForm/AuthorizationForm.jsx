import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import s from './AuthorizationForm.module.scss'

export const AuthorizationForm = ({ userToken, onToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)

  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [passwordError, setPasswordError] = useState('Password не может быть пустым')

  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = { email, password }
    // console.log('userData', userData)
    const response = await fetch('auth/token/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
    })
    const result = await response.json()
    console.log('result', result.auth_token)

    onToken(result.auth_token)
    // console.log('user', userToken)

    localStorage.setItem('user', userToken)
  }

  const emailHandler = (event) => {
    setEmail(event.target.value)
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError('Неверный email')
      console.log(11111)
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)

    if (event.target.value.length < 5) {
      setPasswordError('Пароль меньше 5 символов')
    } else {
      setPasswordError('')
    }
  }

  const blurHandler = (event) => {
    console.log(event.target.name)
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }
  return (
    <form onSubmit={handleSubmit} class={s.form} method="post">
      <div class={s.form__group}>
        <input
          onBlur={(event) => blurHandler(event)}
          onChange={(event) => emailHandler(event)}
          value={email}
          type="text"
          id="login"
          name="email"
          class={s.input_authoriz}
          placeholder=""
        />
        <label for="login" class={s.form__label}>
          {emailDirty && emailError ? (
            <p style={{ color: '#eb0052', fontSize: '14px' }}>{emailError}</p>
          ) : (
            'Телефон или адрес эл. почты'
          )}
        </label>
      </div>
      <div class={s.form__group}>
        <input
          onBlur={(event) => blurHandler(event)}
          onChange={(event) => passwordHandler(event)}
          value={password}
          type="text"
          id="pass"
          name="password"
          class={s.input_authoriz}
          placeholder=""
        />
        <label for="pass" class={s.form__label}>
          {passwordDirty && passwordError ? (
            <p style={{ color: '#eb0052', fontSize: '14px' }}>{passwordError}</p>
          ) : (
            'Пароль'
          )}
        </label>
      </div>
      <a href="#" class={s.recover_pass}>
        Забыли адрес электронной почты или пароль?
      </a>

      <div class={s.createacc_futher}>
        <a href="" class={s.create_account}>
          Создать аккаунт
        </a>
        <button disabled={!formValid} class={s.futherbtn}>
          Далее
        </button>
      </div>
    </form>
  )
}
