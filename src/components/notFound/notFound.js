import React, { useEffect, useState } from "react";

import "./notFound.css";

const NotFound = () => {
  return (
    <div className="notfoundmaindiv">
      <div>
        <div className="whitetext center ">Oops</div>

        <div className="whitetext center">It's not here </div>

        <img
          className="cat center"
          src="https://media.giphy.com/media/sIIhZliB2McAo/source.gif"
        />
      </div>
      {/* <a href="/">start from begining</a> */}
    </div>
  );
};
export default NotFound;
