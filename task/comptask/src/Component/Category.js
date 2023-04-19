import React from 'react'
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <div>
        <h1>Category</h1>
        <h3>greate for</h3>
        <input type="checkbox" />every one 
        <input type="checkbox" /> family 
        <input type="checkbox" />group

        <h3>Region</h3>
        <input type="checkbox" /> paris 
        <input type="checkbox" /> landon 
        <input type="checkbox" /> america 

        {/* <button>Previous</button>
        <button>next</button> */}
        <div className='links'>
    <Link className='back' to='/about'>back</Link>
        {/* <button>next</button> */}
        
    <Link className='next' to='/pricing'>next</Link>
    </div>
    </div>
  )
}

export default Category