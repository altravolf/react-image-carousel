import './App.css'
import Carousel from "./components/Carousel/Carousel"

import { slides } from "./data/db.json";

function App() {

  return (
    <>
      <Carousel data={slides} />
    </>
  )
}

export default App
