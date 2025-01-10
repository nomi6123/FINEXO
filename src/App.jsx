import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Why from './Components/Why/Why'
import Team from './Components/Team/Team'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div >
      <div className='  '>

        <Header/>
        <Home/>
        <Services/>
        <About/>
        <Why/>
        <Team/>
<Footer/>
      </div>
      
    </div>
  )
}

export default App
