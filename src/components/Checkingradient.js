import React from 'react'
import '../components/Checkingradient.css'
import Datatest from './Datatest'

const checkingradient = () => {
  return (
    <>
    <div className='contrainer'>
        <div className='Texthead' style={{textAlign:'center',color:'#ffffff',paddingTop:10}}><h3>Query Data test</h3></div>
        <Datatest/>
    </div>
    
    </>
  )
}

export default checkingradient