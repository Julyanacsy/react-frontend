import './App.css'
import LandingPage from './assets/pages/LandingPage.jsx'
import ListingPage from './assets/pages/listing.jsx'

function App() {
  const path = window.location.pathname || '/';
  if (path.startsWith('/car-listing')) {
    return <ListingPage />
  }
  return <LandingPage />
}

export default App
