import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../Components/Cards'

const Homepage = () => {
  return (
    <div className='m-4'>
        <nav>
            <Link to='/login'><h4>Login Page</h4></Link>
            <Link to='/register'><h4>Registeration Page</h4></Link>
        </nav>
        <Cards />
    </div>
  )
}

export default Homepage