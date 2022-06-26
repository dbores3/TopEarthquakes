import axios from 'axios'

const API_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&orderby=magnitude&limit=3'

//@desc Get the USGS' top earthquakes
//author David Bores 
const getTopEarhquakes = async (token) => {
  const response = await axios.get(API_URL)
  return response.data
}

//returns the response to the reducer
const earthquakesService = {
  getTopEarhquakes,
}

export default earthquakesService