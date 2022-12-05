import { useEffect } from 'react'
import { useState } from 'react'
import s from './Form.module.scss'

export const Form = () => {
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
        {/* {emailDirty && emailError && <h2>Неверная почта</h2>} */}
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
        <a href="" className={s.log_in}>
          In
        </a>
        <button type="submit" disabled={!formValid} className={s.futherbtn}>
          Next
        </button>
      </div>
    </form>
  )
}
