import './Loader.scss';
import React from 'react';
import Loader from 'react-loader-spinner'

const LoaderSpinner = () => {

  return ( 
    <div className="loader">
      <Loader type="Grid" color="#716DCF" height={80} width={80} />
    </div>
   );
}
 
export default LoaderSpinner;