import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import StyledNavLinks from '../styles/NavLinks.styled'
import FilterIcon from './FilterIcon'


const NavLinks = (props) => {
  const {numberOfPastRides, numberOfUpComingRides} = props;

  
  return (
      <StyledNavLinks>
        <section>
          <p><Link to="/nearest-rides">Nearest rides</Link></p>
          <p><Link to="/upcoming-rides">Upcoming rides ({numberOfUpComingRides}) </Link></p>
          <p><Link to="/past-rides">Past rides ({numberOfPastRides}) </Link></p>
        </section>
        <div>
          <FilterIcon/>
        </div>
      </StyledNavLinks>      
  )
}

NavLinks.defaultProps = ({
  numberOfPastRides : '0',
  numberOfUpComingRides : '0'
})

export default NavLinks