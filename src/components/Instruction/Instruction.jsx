import React from 'react';
import './Instruction.scss';


const Instruction = () => {
  return ( 
    <div className="instruction">
      <h1>Image compressor <i className="fas fa-camera-retro"></i></h1>
      <h2>How to compress photo?</h2>
      <ul>
        <li>Upload your image</li>
        <li>Click compress button</li>
        <li>Download your compressed image</li>
      </ul>
    </div>
   );
}
 
export default Instruction;