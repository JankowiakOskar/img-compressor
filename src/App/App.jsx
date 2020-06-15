import '../styles/_base.scss';
import React,{ useState} from 'react';
import Instruction from '../components/Instruction/Instruction';
import CardUpload from '../components/CardUpload/CardUpload';
import CardDownload from '../components/CardDownload/CardDownload';
import Wrapper from '../components/Wrapper/Wrapper';
import imageCompression from 'browser-image-compression';
import CompressButton from '../components/CompressButton/CompressButton';
// import Message from '../components/Message/Message';

function App() {
  const [files, setFile] = useState({
      originalImg: '',
      originalLink: '',
      originalWeight: 0,
      compressedImg: '',
      compressedLink: '',
      compressedWeight: 0,
    }
  );

  const [status, setStatus] = useState({
      clicked: false,
      uploadImg: false,
    }
  )


  const uploadHandler = (file) => {
    const imageSizeMB = convertToMB(file);
    const checkSize = imageSizeMB < 1 ? true : false;
    checkSize&& alert('Your image size have to has minimum 1 MB')
    if(!checkSize) {
      setFile({
          originalImg: file,
          originalLink: URL.createObjectURL(file),
          originalWeight: file.size,
          compressedImg: files.compressedImg,
          compressedLink: files.compressedLink,
        }
      )
      setStatus({
        clicked: !status.clicked ? status.clicked : !status.clicked,
        uploadImg: true,
      })

    }
  }

  const handleCompress = async() => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedImg = await imageCompression(files.originalImg, options)
      await setFile({
          originalImg: files.originalImg,
          originalLink: files.originalLink,
          originalWeight: files.originalWeight,
          compressedImg,
          compressedName: compressedImg.name,
          compressedLink: URL.createObjectURL(compressedImg),
          compressedWeight: compressedImg.size
        })
      await setStatus({
          clicked: true,
          uploadImg: status.uploadImg,
        },
      )
    }
    catch (error){
      alert('Something went wrong, try again!');
    }
  }

  const convertToMB = (size) => (size / 1024 / 1024).toFixed(2);

  const compareCompress = (originalSize, compressedSize) => {
    const muchLess = convertToMB(originalSize) - convertToMB(compressedSize)
    return muchLess
  }

  return (
    <div className="App">
      <Wrapper>
        <Instruction/>
        <div className="container">
          <CardUpload upload={uploadHandler} imgFiles={files} status={status} convertToMB={convertToMB}/>
          {status.uploadImg&& <CompressButton compressing={handleCompress}/>}
          {status.clicked&& <CardDownload imgFiles={files} status={status} convertToMB={convertToMB}/>}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
