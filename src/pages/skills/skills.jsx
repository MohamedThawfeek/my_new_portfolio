import React from 'react'
import Progressbar from "../../components/properties/progressbar/progressbar"

const skills = () => {
  return (
    <div className='skills-container '>
       <div className='box-content '>
        <h1 className="title-text">Skills</h1>
        <div className='skills-box'>
          <Progressbar />
        </div>
      </div>
    </div>
  )
}

export default skills