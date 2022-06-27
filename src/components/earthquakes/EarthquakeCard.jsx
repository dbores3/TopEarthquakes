import Map from "./Map.jsx"

//@desc Card with each Earthquake, containing the earthquake's info & google map
//author David Bores 
function EarthquakeCard({ earthquake }) {
  return (
    <div className='earthquake'>
      <h4>{earthquake['properties']['place']}</h4>
      <p>Magnitude: {earthquake['properties']['mag']}</p>
      <Map earthquake={earthquake}/>
    </div>
  )
}

export default EarthquakeCard