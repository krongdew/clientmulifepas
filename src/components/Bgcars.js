import React from 'react'
import './Bgcars.css'
import img1 from '../Car/car.png'
import img2 from '../Car/onewheel.png'

const bgcar = () => {
  return (
    <>
    <div className='hero'>
        <div className='texthead'>เพื่อนคู่คิด MU LIFE PASS</div>
        <div className='highway'> </div>
        <div className='tree'> </div>
        <div className='car'>
            <img src={img1} />
        </div>
        <div className='wheel'>
            <img src={img2} className='back-wheel'/>
            <img src={img2} className='front-wheel'/>
        </div>
    </div>
    </>
  )
}

export default bgcar