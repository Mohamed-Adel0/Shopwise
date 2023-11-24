import React, { useState } from "react";
import Css from "./Loading.module.css";
const Loading = () => {
  const [time, outTime] = useState(false);
  setTimeout(() => {
    outTime(true);
  }, 3000);

  return (
    <div>
      <div className={`${Css.parent} ${time ? Css.hide : ""}`}>
        <div style={{}} className={Css.hourglass}></div>
      </div>
    </div>
  );
};

export default Loading;
