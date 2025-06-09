import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
    <div className="fixed inset-0 flex justify-center items-center  z-50">
      <div className="loader"></div>
    </div>
  )
}

export default Spinner