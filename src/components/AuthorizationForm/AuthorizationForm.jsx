import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { setUserData } from '../../redux/slices/userDataSlice'
import { setUserToken } from '../../redux/slices/userDataSlice'
import { setUserId } from '../../redux/slices/userDataSlice'
import { setUserEmail } from '../../redux/slices/userDataSlice'

import s from './AuthorizationForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'

export const AuthorizationForm = () => {
  const dispatch = useDispatch()

  const userData = useSelector((state) => state.user.userData)
  const userToken = useSelector((state) => state.user.userToken)
  const userId = useSelector((state) => state.user.userId)
  const userEmail = useSelector((state) => state.user.userEmail)

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

  useEffect(() => {
    const authToken = {
      Authorization: `token ${userToken}`,
    }

    if (userToken) {
      console.log('Auth ->', authToken)

      const getMyself = async () => {
        const response = await fetch('api/v1/auth/users/me/', {
          headers: authToken,
        })
        const result = await response.json()

        console.log('dispatch ---> resul', result)
        console.log('dispatch ---> ID', result.id)
        console.log('dispatch ---> email', result.email)

        const data = {
          id: result.id,
          email: result.email,
          firstName: result.first_name,
          lastName: result.last_name,
        }

        console.log('data usera ->', data)

        dispatch(setUserData(data))
        // dispatch(setUserData(result.email))

        window.location.href = '/'
      }
      getMyself()
    }
  }, [userToken])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = { email, password }

    console.log('handle user data -<<', userData)

    fetch('auth/token/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem('user', response.auth_token)
        // onToken(response.auth_token)
        dispatch(setUserToken(response.auth_token))
      })
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
      Token: {userToken}
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
        <Link to="/" class={s.create_account}>
          Назад
        </Link>
        <Link to="/registration" class={s.create_account}>
          Создать аккаунт
        </Link>
        <button className={s.next} disabled={!formValid} class={s.futherbtn}>
          Далее
        </button>
      </div>
    </form>
  )
}
