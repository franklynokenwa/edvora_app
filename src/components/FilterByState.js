import React, {useState, useContext} from 'react'
import NavBar from './NavBar'
import NavLinks from './NavLinks'
import Rides from './Rides'
import ApiDataContext from './DataContext'

const FilterByState = () => {
  const [selectedState, setSelectedState] = useState()
  const [selectedCity, setSelectedCity] = useState()

  const rideData = useContext(ApiDataContext)

  const getSelectedState = (event)=>{
    setSelectedState(event.target.value)
    console.log(selectedState);

  }
//   const getSelectedCity = (event)=>{
//     setSelectedCity(event.target.value)
//     console.log(selectedCity);

//   }

  const filterByState = rideData.filter((data) => {
    return data.state.includes(selectedState)
  })

//   const filterByCity = rideData.filter((data) => {
//     return data.city.includes(selectedCity)
//   })

  return (
    <div>
        <NavBar/>
        <NavLinks/>
        <p>Testing</p>
    </div>
  )
}

export default FilterByState