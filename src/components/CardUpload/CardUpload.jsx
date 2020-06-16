import React, {useRef, useEffect} from 'react';
import './CardUpload.scss';
import gsap from 'gsap';

const CardUpload = ({ upload, imgFiles, status, convertToMB }) => {
  const uploadFileRef = useRef(null);

  useEffect(() => {
    const uploadCtn = uploadFileRef.current;

    const tl = gsap.timeline({defaults: {ease: 'power3.out'}});
    tl.fromTo(uploadCtn, {autoAlpha: 0, x:'+=200'}, {duration: 2, delay: 1.5, autoAlpha: 1, x: '-=200'});

  },[]);
  
  
  const fileLoaded = status.uploadImg ? (imgFiles.originalLink) : ('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg')

  const handleChange = (e) => {
    const imageFile = e.target.files[0];
    upload(imageFile);
  }

  const sizeMessage = imgFiles.originalImg.name ? (
    <div className="size-message">
      <p>Your photo has {convertToMB(imgFiles.originalImg.size)} Mb</p>
    </div>
  ) : null

  return ( 
    <div className="card">
      <div className="img-ctn">
        <img src={fileLoaded} alt=""/>
      </div>
      <div ref={uploadFileRef} className="file-ctn">
        <label htmlFor="image">Upload your image:</label>
        <input type="file" accept="image/*" onChange={handleChange}/>
      </div>
      {sizeMessage}
    </div>
   );
}
 
export default CardUpload;
