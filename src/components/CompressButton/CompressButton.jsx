import './CompressButton.scss'
import React, {useState, useEffect, useRef} from 'react'
import Loader from 'react-loader-spinner'


const CompressButton = ({ compressing, isLoading }) => {
  let hideBtn = null
  const handleClick = () => {
      compressing();
  }

  const toggleLoader = isLoading ? (<Loader type="Grid" color="#716DCF" height={80} width={80} />) 
    : (<button className="compress-btn" onClick={handleClick}>Click to Compress</button>)

  return ( 
    <div style={hideBtn} className="ctn-btn">
      {toggleLoader}
    </div>
   );
}
 
export default CompressButton