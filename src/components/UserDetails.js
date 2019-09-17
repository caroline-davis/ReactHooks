import React from 'react';
import styles from '../components/UserDetails.module.css';


export default ({ user, weather }) => {

  return (
    <div className={styles.container}>
      <p className={styles.user}>
        {user.name} is {user.age} years old!
      </p>
      <p className={styles.weather}>
        It is {weather.temp} in {weather.place}!
      </p>
    </div>

  )
}
