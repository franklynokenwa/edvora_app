import React,{useState,useContext} from 'react';
import StyledFilter from '../styles/Filter.styled';
import ApiDataContext from './DataContext'
import Rides from './Rides';
import {Link} from 'react-router-dom'



const Filter = (props) => {
  const [selectedState, setSelectedState] = useState()
  const [selectedCity, setSelectedCity] = useState()


  const {filterDisplay} = props;
  const rideData = useContext(ApiDataContext)

  const getSelectedState = (event)=>{
    setSelectedState(event.target.value)
    console.log(selectedState);

  }
  const getSelectedCity = (event)=>{
    setSelectedCity(event.target.value)
    console.log(selectedCity);

  }

  const filterByState = rideData.filter((data) => {
    return data.state.includes(selectedState)
  })

  const filterByCity = rideData.filter((data) => {
    return data.city.includes(selectedCity)
  })


  return (
    <StyledFilter style={{visibility: filterDisplay}}>
        <p>Filters</p>
        <hr/>
        <form>
        <Link to="/rides/state">
            <select onClick={getSelectedState}>
            
              {rideData.map((items) => {
                const {state, station_path} = items
                return(
                  
                  <option key={station_path} value={state}> {state}
                  </option>
                )
              })} 
            </select></Link>
            <select onClick={getSelectedCity}>
              {rideData.map((items) => {
                const {city, date} = items
                return(
                  <option key={date} value={city}>{city}</option>
                )
              })}
            </select>
        </form>
    </StyledFilter>
  )
}

export default Filter