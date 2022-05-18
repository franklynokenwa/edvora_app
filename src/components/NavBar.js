import React, {useState,useEffect, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import StyledNavBar from '../styles/NavBar.styled'
import userImage from '../images/user-image.png'
import UserDataContext from './UserDataContext'

const NavBar = () => {
    const userData = useContext(UserDataContext);
    console.log(userData);


  return (userData === undefined ? 'waiting' :
      <StyledNavBar>
        <h1><Link to='/' style={{color: 'white', textDecoration: 'none'}}>EDVORA</Link> </h1>
        <div>
          <h5>{userData.name}</h5>
          <img src={userData.url} alt='user'/>
        </div>
        
      </StyledNavBar>
      
  )
}

export default NavBar