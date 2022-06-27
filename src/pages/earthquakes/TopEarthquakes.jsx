import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EarthquakeCard from '../../components/earthquakes/EarthquakeCard'
import Spinner from '../../components/Spinner'
import { getTopEarhquakes, resetTopEarthquakes } from '../../features/earthquakes/earthquakesSlice'

//@desc Top 3 earthquakes page
//author David Bores 
function TopEarthquakes() {
  const dispatch = useDispatch()
  
  const { earthquakes, isLoading, isError, message } = useSelector(
    (state) => state.earthquakes
  )
  
  //On mount operations
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getTopEarhquakes())

    return () => {
      dispatch(resetTopEarthquakes())
    }
  }, [isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  
  return (
    <>
      <section className='heading'>
        <h1>Top Earthquakes</h1>
        <p>The strongest earthquakes of the last 30 days</p>
      </section>

      <section className='content'>
        {earthquakes.length > 0 ? (
          <div className='earthquakes'>
            {earthquakes.map((earthquake) => (
              <EarthquakeCard earthquake={earthquake} />
            ))}
          </div>
        ) : (
          <h3>No info found</h3>
        )}
      </section>
    </>
  )
}

export default TopEarthquakes