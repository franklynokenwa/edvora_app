import React, {useContext} from 'react'
import NavBar from './NavBar'
import NavLinks from './NavLinks'
import Rides from './Rides'

import ApiDataContext from './DataContext'
import UserDataContext from './UserDataContext'

const NearestRides = () => {
  const rideData = useContext(ApiDataContext);
  const userData = useContext(UserDataContext);

  const nearestRides = rideData.filter((item) => {
    let stationPathCodes = item.station_path;
    console.log(userData.station_code);
    const userStationCode = userData.station_code;
    
    stationPathCodes.sort((a, b) => {
        return Math.abs(userStationCode - a) - Math.abs(userStationCode - b);
    })
    
  // const finalValue = rideDateFromApi[0]
  //   finalValue.sort((a, b) => {
  //     return Math.abs(userStationCode - a) - Math.abs(userStationCode - b);
  // })

    
    // console.log(typeof(stationPathCodes[0]));
    const newArray = [];
    newArray.push(stationPathCodes[0]);
    // console.log(newArray);
    // console.log(typeof(newArray));

    // const final= newArray.sort((a, b) => b-a);
    // console.log(final);
    console.log(newArray.sort((a, b) => a-b));

    return newArray.sort((a, b) => a-b); 
  })  

  console.log(nearestRides);
  return (
    <div>
        <NavBar/>
        <NavLinks/>
        <Rides rides={nearestRides}/> 
    </div>
  )
}

export default NearestRides