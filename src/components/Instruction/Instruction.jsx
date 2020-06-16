import './Instruction.scss';
import React, {useState, useRef, useEffect} from 'react';
import {TimelineLite} from 'gsap';

const Instruction = () => {
  const buttonRef = useRef(null);
  let tl = null

  useEffect(() => {
    const button = buttonRef.current;
    tl= new TimelineLite({ paused: true }) 
    .fromTo(button, {x: 0}, {x: 200, duration: 1});    
  })

  return ( 
    <div className="instruction">
      <h1>Image compressor <i className="fas fa-camera-retro"></i></h1>
      <h2>How to compress photo?</h2>
      <ul>
        <li>Upload your image</li>
        <li>Click compress button</li>
        <li>Download your compressed image</li>
      </ul>
      <button ref={buttonRef} onClick={() => tl.play()}>Ok</button>
    </div>
   );
}
 
export default Instruction;