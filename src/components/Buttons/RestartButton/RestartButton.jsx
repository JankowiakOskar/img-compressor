import './RestartButton.scss';
import React from 'react';

const RestartButton = ({restartApp}) => {

  const handleClick = () => {
    restartApp()
  }

  return ( 
    <div className="ctn-btn">
      <button className="reset-btn" onClick={handleClick}>Upload next photo</button>
    </div>
  );
}
 
export default RestartButton;