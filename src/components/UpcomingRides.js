import React, {useContext} from 'react'
import NavBar from './NavBar'
import NavLinks from './NavLinks'
import Rides from './Rides'
import ApiDataContext from './DataContext'


const UpcomingRides = () => {
    const rideData = useContext(ApiDataContext)
    const upcomingRides = rideData.filter((item) => {
    let rideDateFromApi = item.date;
    let CurrentDate = new Date();
    rideDateFromApi = new Date(rideDateFromApi);

    return rideDateFromApi > CurrentDate;
  })  
  console.log(upcomingRides);
  return (
    <div>
        <NavBar/>
        <NavLinks numberOfUpComingRides = {upcomingRides.length}/>
        <Rides rides={upcomingRides}/>        
    </div>
  )
}

export default UpcomingRides