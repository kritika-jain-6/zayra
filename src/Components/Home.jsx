import React from 'react'
import '../Style/Home.css'
import Content from './Content'
import Footer from './footer'

const Home=()=> {
  return (
    <div>
      <div className='home_header'>
        <div className='div'>
          <div className='header_container'>
            <h1>Hair</h1>
            <p>
              Start from the top. We've got you covered with a range of formulas to keep your hair in tip-top shape and your style in  mint condition.
            </p>
            <button className='Shampoobtn'>Shop Shampoo</button>
          </div>
        </div>
      </div>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Home
