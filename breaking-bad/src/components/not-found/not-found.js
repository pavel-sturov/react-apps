import React from "react"
import notFoundImg from  '../../img/not-found.jpg';
import './not-found.css';

const NotFound = () => {
  return (
      <>
        <img className="background" src ={notFoundImg} alt="not-found" />
        <h1 className="typo not-found">Oops, we are busy...</h1>
        <h1 className="typo busy">Page not found!</h1>
      </>
  );
};

export default NotFound;