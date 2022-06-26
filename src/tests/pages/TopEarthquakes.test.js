import { render,screen } from '@testing-library/react'
import TopEarthquakes from '../../pages/TopEarthquakes'
import { store } from '../../app/store'
import { Provider } from 'react-redux'

test('Renders the TopEarthquakes page', () => {
    //
    render(<Provider store={store}><TopEarthquakes/></Provider>)
});