import React, {useRef, useEffect} from 'react';
import './CardUpload.scss';
import gsap from 'gsap';

const CardUpload = ({ upload, imgFiles, status, convertToMB }) => {
  const uploadFileRef = useRef(null);
  const inputRef = useRef(null);

  // animations
  useEffect(() => {
    const uploadCtn = uploadFileRef.current;
    const tl = gsap.timeline({defaults: {ease: 'power3.out'}});
    gsap.set(uploadCtn, { autoAlpha: 0 });
    tl.fromTo(uploadCtn, {autoAlpha: 0, x:'+=200'}, {duration: 2, delay: 1.4, autoAlpha: 1, x: '-=200'});
  },[]);

  useEffect(() => {
    const input = inputRef.current;
    // if image isn't uploaded set input value empty 
    if (!status.uploadImg) {
      input.value = '';
    }
  },[status])

  const handleChange = (e) => {
    const imageFile = e.target.files[0];
    upload(imageFile);
  }

  
  
  const fileLoaded = status.uploadImg ? (imgFiles.originalLink) : ('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg')

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
        <input ref={inputRef} type="file" accept="image/*" onChange={handleChange}/>
      </div>
      {sizeMessage}
    </div>
   );
}
 
export default CardUpload;
