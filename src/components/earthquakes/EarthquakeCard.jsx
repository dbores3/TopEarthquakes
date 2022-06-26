import Map from "./Map.jsx"

//@desc Card with each Earthquake, containing the earthquake's info & google map
//author David Bores 
function EarthquakeCard({ earthquake }) {
  return (
    <div className='earthquake'>
      <h2>{earthquake['properties']['place']}</h2>
      <p>Magnitude: {earthquake['properties']['mag']}</p>
      <Map earthquake={earthquake}/>
    </div>
  )
}

export default EarthquakeCard