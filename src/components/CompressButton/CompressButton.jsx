import './CompressButton.scss'
import React from 'react'


const CompressButton = ({ compressing }) => {
  
  const handleClick = () => {
    compressing();
  }
  return ( 
    <div className="ctn-btn">
      <button className="compress-btn" onClick={handleClick}>Click to Compress</button>
    </div>
   );
}
 
export default CompressButton