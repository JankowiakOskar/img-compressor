import './CompressButton.scss'
import React from 'react'


const CompressButton = ({ compressing, status }) => {
  
  const isDisabled = status.clicked ? true : false;

  const btnContent = isDisabled ? <span>Compressing Done <i className="fas fa-check-circle"></i></span> 
  : <span>Click to Compress</span>

  const handleClick = () => {
      compressing();
  }

  return ( 
    <div className="ctn-btn">
      <button className="compress-btn" onClick={handleClick} disabled={isDisabled}>{btnContent}</button>
    </div>
   );
}
 
export default CompressButton