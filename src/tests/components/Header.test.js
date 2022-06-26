import { render, screen  } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../../components/Header'

describe("Test Header", () => {
    test('Renders the Header component & checks for the link to home', () => {
        render(<Router><Header /></Router>)
        const linkEl = screen.getByRole('link', { name: /FUTURICE EARTHQUAKES/ })
        expect(linkEl).toHaveAttribute('href', "/")
    })
    test('Renders the Header componen & checks for the link to top_earthquakes', () => {
        render(<Router><Header /></Router>)
        const linkEl = screen.getByRole('link', { name: /Top earthquakes/ })
        expect(linkEl).toHaveAttribute('href', "/top_earthquakes")
    })
})