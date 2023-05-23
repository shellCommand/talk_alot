import { useState } from 'react'

const Auth = () => {
  const [isLogIn, setIsLogin] = useState(true)
  const [error, setError] = useState(null)
  const isLogin = true

  const viewLogin = (status) => {
    setError(null)
    setIsLogin(status)
  }
  return (
    <div className='auth-container'>
      <div className='auth-container-box'>
        <form>
          <h2>{isLogin ? 'Please log in' : 'Please sign up'}</h2>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          {!isLogin && <input type='password' placeholder='Confirm password'/>}
          <input type='submit' className='create'/>
          {error && <p>{error}</p>}
        </form>
        <div className='auth-options'>
          <button onClick={() => viewLogin(false)}
          style={{backgroundColor : !isLogin ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188)'}}
          >Sign up</button>
          <button onClick={() => viewLogin(true)}
          style={{backgroundColor : isLogin ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188)'}}
          >Login</button>
        </div>
      </div>
    </div>
  )
}

export default Auth
