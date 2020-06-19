import './Instruction.scss';
import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';

const Instruction = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const elements = wrapper.children;
    const title = elements[0];
    const question = elements[1];
    const instruction = elements[2];

    const tl = gsap.timeline({defaults: {ease: 'power3.out'}});
    gsap.set(wrapper, { autoAlpha: 0 });
    tl.fromTo(wrapper, {y: '-=300'}, {duration: 1, delay: 0.3, autoAlpha: 1, y: '+=300'})
      .fromTo(title, {y: '-=300'}, {duration: 1, y: '+=300'}, '-=0.5')
      .fromTo([question,instruction], {scaleY: 0, autoAlpha: 0}, {duration: 1, scaleY: 1, autoAlpha: 1}, '-=0.5');
  },[])

  return ( 
    <div ref={wrapperRef} className="instruction">
      <h1>Photo compressor <i className="fas fa-camera-retro"></i></h1>
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