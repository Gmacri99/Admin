import React from 'react'
import Form from '../components/Form'

const Login = () => {

    const campos={"username":"string","password":"string"}
    

  return (
    <div>
      <Form inputs={campos}/>
    </div>
  )
}

export default Login
