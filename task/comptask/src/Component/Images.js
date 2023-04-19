import React from 'react'
import { Link } from 'react-router-dom'


 const Images = () => {
  return (
    <>
        <h1>Gallery images</h1>
        <h4>maximum upload size is :100mb</h4>
        <input type='file'/>
        <div className='links'>
    <Link className='back' to='/general'>back</Link>
        
    <Link className='next' to='/about'>next</Link>
    </div>
    </>
  )
}

export default Images