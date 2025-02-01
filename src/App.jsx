import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Banner, Banner1 } from './components/Banner/Banner'
import { Cards, CardsRecepies } from './components/Cards/cards'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Banner1/>
      <Cards/>
      <CardsRecepies/>
      <Footer/>
    </>
  )
}

export default App
