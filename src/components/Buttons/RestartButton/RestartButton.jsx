import './RestartButton.scss';
import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
const RestartButton = ({ restartApp, status, setStatus }) => {
  const refBtn  = useRef(null);

  useEffect(() => {
    const resetBtn = refBtn.current;
    const tl = gsap.timeline({defaults: {ease: 'power3.out'}});
    tl.fromTo(resetBtn, {autoAlpha: 0, y:'+=200'}, {duration: 1.2, autoAlpha:1, y:'-=200'} );
  },[])

  const handleClick = () => {
    setStatus({
      ...status,
      isLoading: true
    })

    setTimeout(() => {
      restartApp()
    }, 500)
    
  }

  return ( 
    <div className="ctn-btn">
      {!status.isLoading&& <button ref={refBtn} className="reset-btn" onClick={handleClick}>Upload next photo</button>}
    </div>
  );
}
 
export default RestartButton;