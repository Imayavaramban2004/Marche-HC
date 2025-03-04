import React, { useEffect, useState } from "react";
import "./css/scrollingcontainer.css";
<<<<<<< HEAD
function ScrollingContainer({heading,bgimg,subHeading}) {
=======
function ScrollingContainer({ heading, bgimg, subHeading }) {
>>>>>>> b52f35b (pages/public/src - update)
  const [width, setWidth] = useState(300);
  const [opacity, setOpacity] = useState(0);
  const [zoomHeight, setZoomHeight] = useState(0);
  const [zoomWidth, setZoomWidth] = useState(0);
  useEffect(() => {
    setZoomWidth(window.innerWidth * 0.67);
    setZoomHeight(window.innerHeight * 0.67);
  }, []);
<<<<<<< HEAD
  
  return (
    <div>
      
      <div style={{ position: "relative",marginBottom:"100px"}}>
=======

  return (
    <div>
      
      <div style={{ position: "relative", marginBottom: "100px" }}>
>>>>>>> b52f35b (pages/public/src - update)
        <div className="scrollcontainer">
          <div className="stickydiv">
            <div
              className="zoomoutdiv"
              style={{ height: zoomHeight, width: zoomWidth }}
            >
<<<<<<< HEAD
              <div className="bgimagediv" style={{backgroundImage:`url(${bgimg})`}}>
=======
              <div
                className="bgimagediv"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
>>>>>>> b52f35b (pages/public/src - update)
                <span style={{ display: "none" }}>something</span>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
        <div className="texthoverdiv">
          <div className="textdiv">
            <div className="texthovered">
              <h3>{heading}</h3>
              <h4>{subHeading}</h4></div>
            {/* <h4 className="texthovered">{subHeading}</h4> */}
          </div>
        </div>
        {/* <div className="fogdiv"></div> */}
      </div>
      
=======
          <div className="texthoverdiv">
            <div className="textdiv">
              <div className="texthovered">
                <h3>{heading}</h3>
                <h4>{subHeading}</h4>
              </div>
              {/* <h4 className="texthovered">{subHeading}</h4> */}
            </div>
          </div>
        </div>
        <div className="fogdiv"></div>
      </div>
>>>>>>> b52f35b (pages/public/src - update)
    </div>
  );
}

export default ScrollingContainer;
<<<<<<< HEAD
=======

>>>>>>> b52f35b (pages/public/src - update)
