import { render,screen } from '@testing-library/react'
import Map from '../../components/earthquakes/Map'

test('Renders the Map & checks for the header', () => {
    //
    const earthquake = {
        geometry: {
            coordinates: {
                0: -71.1844,
                1: -9.0479
            }
        }
    }
    
    const prueba = render(<Map earthquake={earthquake} isLoaded={true}/>)
});