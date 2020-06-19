import '../styles/_base.scss';
import React, { useState } from 'react';
import Instruction from '../components/Instruction/Instruction';
import CardUpload from '../components/CardUpload/CardUpload';
import CardDownload from '../components/CardDownload/CardDownload';
import Wrapper from '../components/Wrapper/Wrapper';
import imageCompression from 'browser-image-compression';
import ButtonsContainer from '../components/Buttons/ButtonsContainer';

function App() {
  const [files, setFile] = useState({
    originalImg: '',
    originalLink: '',
    originalWeight: 0,
    compressedImg: '',
    compressedLink: '',
    compressedWeight: 0,
  });
  const [status, setStatus] = useState({
    clicked: false,
    uploadImg: false,
    isLoading: false,
    isDownload: false,
  });

  const uploadHandler = (file) => {
    const imageSizeMB = convertToMB(file.size);
    const checkSize = imageSizeMB < 1 ? true : false;
    checkSize && alert('Your image size have to has minimum 1 MB');

    if (!checkSize) {
      setFile({
        originalImg: file,
        originalLink: URL.createObjectURL(file),
        originalWeight: file.size,
      });
      setStatus({
        clicked: !status.clicked ? status.clicked : !status.clicked,
        uploadImg: true,
      });
    }
  };

  const handleCompress = async () => {
    // show loader
    setStatus({
      ...status,
      isLoading: true,
    });

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedImg = await imageCompression(files.originalImg, options);
      // hide loader
      setStatus({
        ...status,
        isLoading: false,
      });

      setFile({
        ...files,
        compressedImg,
        compressedName: compressedImg.name,
        compressedLink: URL.createObjectURL(compressedImg),
        compressedWeight: compressedImg.size,
      });
      // button clicked show download card
      setStatus({
        ...status,
        clicked: true,
      });
    } catch (error) {
      alert('Something went wrong, try again!');
    }
  };

  const restartApp = () => {
    const fileObj = {...files};
    const statusObj = {...status};

    // reset all images values
    for(const key in fileObj) {
      if (fileObj.hasOwnProperty(key)) {
        fileObj[key] = ''
      }
    }
    
    // set all statuses falsy 
    for (const status in statusObj) {
      statusObj[status] = false;
    }

    setFile({
      ...fileObj
    })

    setStatus({
      ...statusObj
    })
  } 

  const convertToMB = (size) => (size / 1024 / 1024).toFixed(2);

  return (
    <div className="App">
      <Wrapper>
        <Instruction />
        <div className="container">
          <CardUpload
            upload={uploadHandler}
            imgFiles={files}
            status={status}
            convertToMB={convertToMB}
          />
          {status.uploadImg && (
            <ButtonsContainer 
            compressing={handleCompress} 
            status={status}
            restartApp={restartApp} />
          )}
          {status.clicked && (
            <CardDownload
              imgFiles={files}
              status={status}
              convertToMB={convertToMB}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
