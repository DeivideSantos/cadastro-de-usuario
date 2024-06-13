import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import './style.css'


const index = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault()

    alert("envio de dados: " + username + " - " + password )
  }


  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>acesse o sistema</h1>
            <div className='input-field'>
            <input type="email" placeholder='e-mail' required onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className='icon'/>
            </div>
            <div className='input-field'>
            <input type="password" placeholder='senha' required onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className='icon' />
            </div>

            <div className='recall-forget'>
                <label >
                    <input type="checkbox" />
                    lembre de mim
                </label>
                <a href="#">esqueceu a sua senha?</a>
            </div>

            <button>login</button>

            <div className='signup-link'>
              <p>não possui uma conta? <a href='#'>criar conta</a></p>
            </div>
        </form>
    </div>

  );
}

export default index
