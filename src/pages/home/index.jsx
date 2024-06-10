import { useEffect, useState, useRef } from 'react'
import './App.css'
import Trash from '../../assets/16qg.svg'
import Api from '../../services/api'
import api from '../../services/api'

function Home() {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function getUsers() {
   const usersFromApi = await Api.get("/usuarios")

    setUsers(usersFromApi.data)

  }

  async function createUse() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
     
    getUsers()
   }
 

  useEffect(() =>{
    getUsers()  
  }, [])


    
  return (
    <>
      <div className='container'>
        <form action="">
          <h1>cadastro de usuarios</h1>
          <input placeholder='nome' name='name' type='name' ref={inputName} />
          <input placeholder='idade' name='idade' type='idade' ref={inputAge}/>
          <input placeholder='email' name='email' type='email' ref={inputEmail}/>
          <button type='button' onClick={createUse}>cadastrar usuario</button>
        </form>
        <div>
          {users.map(user => (
            <div key={user.id} className='users'>
              <p>nome: <span>{user.name}</span></p>
              <p>idade: <span>{user.age}</span></p>
              <p>email: <span>{user.email}</span></p>

              <button onClick={() => deleteUsers(user.id)}>
                <img src={Trash} />
              </button>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default Home
