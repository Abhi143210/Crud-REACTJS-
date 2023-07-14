import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <section id={style.nav}>
        <Link to="/create">Create-User</Link>

        <Link to="/user">Users</Link>
    </section> 
  )
}

export default Homepage
