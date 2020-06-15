import './CardDownload.scss';
import React from 'react';
// import Message from '../Message/Message';

const CardDownload = ({ status, imgFiles, convertToMB }) => {
  const URL = imgFiles.compressedLink;
  const { compressedName } = imgFiles;

  const sizeMessage = imgFiles.compressedImg.name ? (
    <div className="size-message">
      <p>Your photo is ready to download, and now has only {convertToMB(imgFiles.compressedImg.size)} Mb</p>
    </div>
  ) : null

  return ( 
    <div className="card">
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