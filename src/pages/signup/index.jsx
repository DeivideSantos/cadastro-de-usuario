import React from 'react'
import './style.css'

const Signup = () => {
  return (
    <div className='container'>
      <form className='formRegister'>
        <h1>Faça seu cadastro</h1>
        <input type="text" placeholder='nome' required/>
        <input type="password" placeholder='senha' required/>
        <input type="password" placeholder='confirme sua senha' required/>
        <button>Cadastrar</button>
      </form>
    </div>
  )
}

export default Signup
