import "./App.css";
import React, {useState, useEffect} from "react";
import NasaCard from './Components/aCard';
import axios from 'axios';
import styled from 'styled-components';
import './index.css'

const PageDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFDEE9;
background-image: linear-gradient(0deg, #FFDEE9 0%, #d5fffe 100%);
color: black;

h1{
  font-family: 'Comfortaa', cursive;
  margin: 2%;
  padding: 1rem;
  background: dodgerblue;
  color: black;
  border-radius: 100% 4%;
}

p{
  background: white;
  border-radius: 2%;
  padding: 1rem;
}
`

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
      <PageDiv className="App">
        <h1>NASA Photo of the Day</h1>
          <NasaCard 
          dailyPhoto = {dailyPhoto}
          dailyTitle = {dailyTitle}
          dailyDate = {dailyDate}
          dailyDesc = {dailyDesc}
          changeDate={() => changeDate(document.getElementById('date').value)}
          />
      </PageDiv>
  )
}


export default App;
