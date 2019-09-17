
const wait = () => new Promise(r => setTimeout(() => r(), 2000))
export const getUser = async() => {
  await wait()
  const user = {name: "remy", age: 4}
  return (
    user
  )
}

export const getWeather = async() => {
  await wait()
  const weather = {place: "albuquerque", temp: "25 degrees"}
  return (
    weather
  )
}



//
// export default function () {
//   const response = await fetch(url)
//   const user = await response.json();
//   return user;
// }
