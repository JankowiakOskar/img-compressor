import React from 'react'
// import Message from '../Message/Message';

const CardDownload = ({ status, imgFiles }) => {
  const URL = imgFiles.compressedLink;
  const { compressedName } = imgFiles;

  return ( 
    <div className="card">
      <div className="img-ctn">
        <img src={URL} alt=""/>
      </div>
      <div className="download-img">
        <a className="download-btn" href={URL} download={compressedName}>Download</a>
      </div>
    </div>
   );
}
 
export default CardDownload;