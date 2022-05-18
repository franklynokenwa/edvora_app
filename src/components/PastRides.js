import React, {useContext} from 'react'
import NavBar from './NavBar'
import NavLinks from './NavLinks'
import Rides from './Rides'
import ApiDataContext from './DataContext'

const PastRides = () => {
    const rideData = useContext(ApiDataContext)
    const pastRides = rideData.filter((item) => {
    let rideDateFromApi = item.date;
    let CurrentDate = new Date();
    rideDateFromApi = new Date(rideDateFromApi);

    return rideDateFromApi < CurrentDate;
  })  
  console.log(pastRides);
  return (
    <div>
      <NavBar/>
      <NavLinks numberOfPastRides = {pastRides.length}/>
      <Rides rides={pastRides}/>        
    </div>
  )
}


export default PastRides