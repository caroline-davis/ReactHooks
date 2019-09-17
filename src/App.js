import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { getUser, getWeather } from './apis/api.js';
import UserDetails from './components/UserDetails.js';

export default function App() {

  const [user, setUser] = useState(null)
  const [weather, setWeather] = useState(null)


/* it will only re-render if the user.name or weather.temp value change */

  useEffect(() => {

    async function loadWeather() {
      const weather = await getWeather()
      setWeather(weather)
    }
    async function loadUser() {
      const user = await getUser()
      setUser(user)
    }
    loadWeather()
    loadUser()

  }, []);

  /* if the user is undefined, run the spinner - else show the data*/

  if (!user|| !weather) {
    return (
    <div className={styles.spinner}>
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
    )
  }

  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Hook Prac</h1>
      </div>
      {/*TO DO: create this css when the component is created*/}
      <UserDetails user={user} weather={weather}> </UserDetails>
      </div>

  )
}
