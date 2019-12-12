import "./App.css";
import React, {useState, useEffect} from "react";
import NasaCard from './Components/aCard';
import axios from 'axios';

//function
function App() {
  const [dailyPhoto, setDailyPhoto] = useState([]);
  const [dailyTitle, setDailyTitle] = useState([]);
  const [dailyDate, setDailyDate] = useState([]);
  const [dailyDesc, setDailyDesc] = useState([]);

  const changeDate = newDate => {
    setDailyDate(newDate)
  }

  //useEffect
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Mb4j5wTSo0YWH6vZnKzyHM0H1wSSDNq3e2Txhfz1`
        )
      .then(res => {
          // console.log(response.data)
          setDailyPhoto(res.data.url)
          setDailyTitle(res.data.title)
          setDailyDate(res.data.date)
          setDailyDesc(res.data.explanation)
      }) .catch(err => {
          console.log(err);
      })
  }, [dailyDate])

  return (
      <div className="App">
        <h1>NASA Photo of the Day</h1>
          <NasaCard 
          dailyPhoto = {dailyPhoto}
          dailyTitle = {dailyTitle}
          dailyDate = {dailyDate}
          dailyDesc = {dailyDesc}
          changeDate={() => changeDate(document.getElementById('date').value)}
          />
      </div>
  )
}


export default App;
