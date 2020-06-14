import React from 'react';
import Message from '../Message/Message';
import './CardUpload.scss';

const CardUpload = ({upload, imgFiles, status}) => {
  const fileLoaded = status.uploadImg ? (imgFiles.originalLink) : ('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg')
  
  const handleChange = (e) => {
    const imageFile = e.target.files[0];
    upload(imageFile);
  }

  return ( 
    <div className="card">
      <div className="img-ctn">
        <img src={fileLoaded} alt=""/>
      </div>
      <div className="upload-img">
        <label htmlFor="image">Upload your image:</label>
        <input type="file" accept="image/*" onChange={handleChange}/>
      </div>
      <Message {...props}/>
    </div>
   );
}
 
export default CardUpload;
