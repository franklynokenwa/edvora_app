import React,{useState, useEffect} from 'react'
import Home from './components/Home';
import GlobalStyles from './styles/Global.styled';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom'
import ApiDataContext from './components/DataContext'
import UpcomingRides from './components/UpcomingRides';
import PastRides from './components/PastRides';
import NearestRides from './components/NearestRides';
import UserDataContext from './components/UserDataContext';
import Rides from './components/Rides';
import FilterByState from './components/FilterByState';

function App(dataFromChild) {
  const [rideData, setRideData] = useState([]);
  const [userData, setUserData] = useState()


    useEffect(() => {
      const getData = async () =>{
        await axios.get("https://assessment.api.vweb.app/rides").then(response => {
        console.log(response.data);
        console.log('success');
        setRideData(response.data)
      })
    }
    const getUserData = async () =>{
      await axios.get("https://assessment.api.vweb.app/user").then(response => {
      console.log(response.data);
      console.log('success');
      setUserData(response.data)

    })
  }
      getData();
      getUserData();

    }, []);     
     

  return (
      <ApiDataContext.Provider value={rideData}>
        <UserDataContext.Provider value={userData}>
          <main className="App">
            <GlobalStyles/>
            <Routes>
              <Route index path="/" element={<Home/>}></Route>
              <Route path="/nearest-rides" element={<NearestRides/>}></Route>
              <Route path="/upcoming-rides" element={<UpcomingRides/>}></Route>
              <Route path="/past-rides" element={<PastRides/>}></Route>
              <Route path="/rides/state" element={<FilterByState/>}></Route>
            </Routes>
          </main>
        </UserDataContext.Provider>
      </ApiDataContext.Provider>
    
  );
}

export default App;
