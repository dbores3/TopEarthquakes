import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TopEarthquakes from './pages/earthquakes/TopEarthquakes'

function App() {
  //App's routes
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/top_earthquakes' element={<TopEarthquakes/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
