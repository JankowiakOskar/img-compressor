import React from 'react';
// import Message from '../Message/Message';
import './CardUpload.scss';

const CardUpload = ({ upload, imgFiles, status, convertToMB }) => {
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
      <div className="file-ctn">
        <label htmlFor="image">Upload your image:</label>
        <input type="file" accept="image/*" onChange={handleChange}/>
      </div>
      {sizeMessage}
    </div>
   );
}
 
export default CardUpload;
