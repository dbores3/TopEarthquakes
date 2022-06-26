import { render,screen } from '@testing-library/react'
import EarthquakeCard from '../../components/earthquakes/EarthquakeCard'

test('Renders the Map & checks for the header', () => {
    //
    const earthquake = {
        properties: {
          place: "west of Macquarie Island",
          mag: 7.7
        },
        geometry: {
            coordinates: {
                0: -71.1844,
                1: -9.0479
            }
        }
    }
    
    const prueba = render(<EarthquakeCard earthquake={earthquake}/>)
});