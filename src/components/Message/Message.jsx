import './Message.scss';
import React from 'react'

const Message = (props) => {
  const { compareCompress, originalSize, compressedSize } = props;
  const lessSize = compareCompress(originalSize,compressedSize);

  return ( 
    <div className="msg-ctn">
      <p className="msg">The size of your image was compressed about {lessSize}</p>
    </div>
   );
}
 
export default Message;
