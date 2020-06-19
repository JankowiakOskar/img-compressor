import React, {useState, useRef, useEffect} from 'react';
import './CardUpload.scss';
import gsap from 'gsap';

const CardUpload = ({ upload, imgFiles, status, convertToMB }) => {
  const [disabled, setDisabled] = useState(false);
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
    // if image isn't uploaded set input value empty && if apliaction was restart reset and unlock input
    if (!status.uploadImg) {
      input.value = '';
      setDisabled(false)
    }
  },[status])

  const handleChange = (e) => {
    const imageFile = e.target.files[0];
    const imageSizeMB = convertToMB(imageFile.size);
    const checkSize = imageSizeMB < 1 ? true : false;
    if (checkSize) {
      alert('Your image size have to has minimum 1 MB');
      return false;

    } else if(!checkSize) {
      upload(imageFile);
      setDisabled(!disabled);
    }
    
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
        <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} disabled={disabled}/>
      </div>
      {sizeMessage}
    </div>
   );
}
 
export default CardUpload;
