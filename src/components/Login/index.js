import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const history = useHistory()

  const onChangingName = event => setName(event.target.value)
  const onChangingPassword = event => setPassword(event.target.value)
  const onChangingShowErrorMessage = () => setShowErrorMessage(prev => !prev)

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.push('/')
  }

  const onSubmitFailure = message => {
    setErrorMessage(message)
    onChangingShowErrorMessage()
    console.log(message)
  }

  const onSubmitLogin = async event => {
    event.preventDefault()
    const userDetails = {username: name, password}
    console.log(userDetails)
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }
  return (
    <div className="login-bg-container">
      <img
        className="movies-heading"
        alt="website logo"
        src="https://res.cloudinary.com/kanya-raashi/image/upload/v1729068838/websitelogo_nkh3fl.png"
      />
      <form onSubmit={onSubmitLogin} className="login-card-container">
        <h1 className="login-card-heading">Login</h1>
        <div className="input-field-container">
          <label htmlFor="name" className="input-label">
            USERNAME
          </label>
          <input
            type="text"
            id="name"
            className="input-field"
            value={name}
            onChange={onChangingName}
          />
        </div>
        <div className="input-field-container">
          <label htmlFor="password" className="input-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={onChangingPassword}
          />
        </div>
        {showErrorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  )
}
export default Login
