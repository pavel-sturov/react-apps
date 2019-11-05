import React, {Fragment, useState} from "react";

import "./home-page.css";
import SearchPanel from "../search-panel";

const HomePage = () => {

  const [info, setInfo]  = useState('');

  const search = function(el) {
    // console.log(el.target.value);
    return setInfo(el.target.value);
  };

console.log('iiinfooooo!', info);

  return (
      <Fragment>
        <h1>Welcome to our portal!</h1>
        <h2>Here you can find any character of  "Breaking Bad"</h2>
        <input type="text" className="search-panel" placeholder="Enter name here..."
                onChange={search}/>
        <div className="search-wrapper">
          <SearchPanel info={info} />
        </div>
      </Fragment>
  );
};

export default HomePage;