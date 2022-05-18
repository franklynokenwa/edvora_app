import React, {useContext} from 'react'
import NavBar from './NavBar'
import NavLinks from './NavLinks'
import Rides from './Rides'

import ApiDataContext from './DataContext'
import UserDataContext from './UserDataContext'



const NearestRides = () => {
  const rideData = useContext(ApiDataContext);
  const userData = useContext(UserDataContext);

  const NearestRides = rideData.filter((item) => {
    let rideDateFromApi = item.station_path;
    console.log(userData.station_code);
    const userStationCode = userData.station_code;
    
    rideDateFromApi.sort((a, b) => {
        return Math.abs(userStationCode - a) - Math.abs(userStationCode - b);
    })
    
  // const finalValue = rideDateFromApi[0]
  //   finalValue.sort((a, b) => {
  //     return Math.abs(userStationCode - a) - Math.abs(userStationCode - b);
  // })

    
    console.log(rideDateFromApi[0]);
    // const newArray = [];
    // const value = newArray.push(rideDateFromApi[0]);
    // console.log(newArray);

    return rideDateFromApi[0] 
  })  

  console.log(rideData);
  return (
    <div>
        <NavBar/>
        <NavLinks/>
        <p style={{color:'white'}}>Your Nearest Rides are coming soon</p> 
        <Rides rides={NearestRides}/> 
    </div>
  )
}

export default NearestRides