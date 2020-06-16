import './CompressButton.scss'
import React, {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'


const CompressButton = ({ compressing }) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      compressing();
      setLoading(false);
    },1500)
  }

  const toggleLoader = isLoading ? (<Loader type="Grid" color="#716DCF" height={80} width={80} />) 
    : (<button className="compress-btn" onClick={handleClick}>Click to Compress</button>)
  return ( 
    <div className="ctn-btn">
      {toggleLoader}
    </div>
   );
}
 
export default CompressButton