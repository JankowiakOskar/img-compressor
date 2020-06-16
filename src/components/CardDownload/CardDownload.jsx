import './CardDownload.scss';
import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
const CardDownload = ({ imgFiles, convertToMB }) => {
  const URL = imgFiles.compressedLink;
  const { compressedName } = imgFiles;
  const cardRef = useRef(null);

  useEffect(() => {
    const cardWrapper = cardRef.current;
    const tl = gsap.timeline({defaults: {ease: 'power3.out'}});
    gsap.set(cardWrapper, {autoAlpha: 0});
    tl.fromTo(cardWrapper, {x:'-=200'}, {duration: 3, autoAlpha:1, x:'+=200'})
  }, [])


  const sizeMessage = imgFiles.compressedImg.name ? (
    <div className="size-message">
      <p>and now has only {convertToMB(imgFiles.compressedImg.size)} Mb</p>
    </div>
  ) : null


  return ( 
    <div ref={cardRef} className="card card-download">
      <div className="img-ctn">
        <img src={URL} alt=""/>
      </div>
      <div className="download-ctn">
        <p>Download compressed image:</p>
        <div className="btn-ctn">
          <a className="download-btn" href={URL} download={compressedName}>Download</a>
        </div> 
      </div>
      {sizeMessage}
    </div>
   );
}
 
export default CardDownload;