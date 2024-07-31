import { useState } from 'react'
import React from 'react'
//impotamos componentes
import Profile from '../src/components/Profile'
import UserList from '../src/components/UserList'
// Importamos Context
import UserState from './context/User/UserState'
// Importamos Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (


    <UserState>
      <div className="container p-4">
        <div className='row'>
          <div className='col-md-7'>
            <UserList />
          </div>
          <div className='col-md-5'>
            <Profile/>
          </div>
        </div>
      </div>
    </UserState>



  )
}

export default App