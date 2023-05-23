import { useState } from 'react'

const Auth = () => {
  const [isLogIn, setIsLogin] = useState(true)
  const [error, setError] = useState(null)
  // const isLogIn = true

  const viewLogin = (status) => {
    setError(null)
    setIsLogin(status)
  }


  return (
    <div className='auth-container'>
      <div className='auth-container-box'>
        <form>
          <h2>{isLogIn ? 'Please log in' : 'Please sign up'}</h2>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          {!isLogIn && <input type='password' placeholder='Confirm password'/>}
          <input type='submit' className='create'/>
          {error && <p>{error}</p>}
        </form>
        <div className='auth-options'>
          <button onClick={() => viewLogin(false)}
          style={{backgroundColor : !isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188)'}}
          >Sign up</button>
          <button onClick={() => viewLogin(true)}
          style={{backgroundColor : isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188)'}}
          >Login</button>
        </div>
      </div>
    </div>
  )
}

export default Auth
