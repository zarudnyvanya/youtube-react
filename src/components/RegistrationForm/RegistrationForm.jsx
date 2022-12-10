import { useEffect } from 'react'
import { useState } from 'react'
import s from './RegistrationForm.module.scss'
import {Link} from "react-router-dom";

export const RegistrationForm = () => {
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

  const handleForm = () => {
    console.log(email, password)
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
    <form action="/api/v1/auth/users/" className={s.form} method="post">
      <div className={s.form__group}>
        <input
          onBlur={(event) => blurHandler(event)}
          onChange={(event) => emailHandler(event)}
          value={email}
          type="text"
          id="login"
          name="email"
          className={s.input_authoriz}
          placeholder=" "
        />
        <label htmlFor="login" className={s.form__label}>
          {emailDirty && emailError ? (
            <p style={{ color: '#eb0052', fontSize: '14px' }}>{emailError}</p>
          ) : (
            'Телефон или адрес эл. почты'
          )}
        </label>
      </div>
      <div className={s.form__group}>
        {/* {passwordDirty && passwordError && <h2 style={{ color: 'red' }}>Неверный пароль</h2>} */}
        <input
          onBlur={(event) => blurHandler(event)}
          onChange={(event) => passwordHandler(event)}
          value={password}
          type="password"
          id="pass"
          name="password"
          className={s.input_authoriz}
          placeholder=" "
        />
        <label htmlFor="pass" className={s.form__label}>
          {passwordDirty && passwordError ? (
            <p style={{ color: '#eb0052', fontSize: '14px' }}>{passwordError}</p>
          ) : (
            'Пароль'
          )}
        </label>
      </div>
      <div className={s.createacc_futher}>
        <Link to="/authorization" className={s.log_in}>
          In
        </Link>
        <Link to="/" class={s.create_account}>
          Назад
        </Link>
        <button type="submit" disabled={!formValid} className={s.futherbtn}>
          Next
        </button>
      </div>
    </form>
  )
}
