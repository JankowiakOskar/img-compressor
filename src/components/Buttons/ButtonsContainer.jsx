import '../../styles/_base.scss';
import React from 'react';
import LoaderSpinner from '../Loader/Loader';
import CompressButton from './CompressButton/CompressButton';
import RestartButton from './RestartButton/RestartButton';

const ButtonsContainer = ({ compressing, status, restartApp }) => {
  
  const toggleLoader = status.isLoading ? 
    <LoaderSpinner/> 
    : <CompressButton 
        compressing = {compressing}
        status = {status}
      />

  return ( 
    <div className="container-btns">
      {toggleLoader}
      {status.clicked && <RestartButton restartApp={restartApp}/>}
    </div>
   );
}
 
export default ButtonsContainer;