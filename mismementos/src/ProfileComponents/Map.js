import React, {useState} from 'react';
// import { GeolocateControl } from 'react-map-gl';
import ReactMapGL from 'react-map-gl'
// import ReactMapGL, {NavigationControl} from 'react-map-gl';

function Map() {
    const TOKEN ="pk.eyJ1Ijoia3NvbG9tb243IiwiYSI6ImNrZ2gzODEzdjA0OHkycWxmOXpkY2VhdDIifQ.lnW9qKBPgt5JkWPhEGml_A"
  
    const [viewport, setViewPort]= useState({ 
      latitude: 40.730610,
      longitude: -73.935242,
      width: "100vw",
      height: "100vh",
      zoom: 10
    });
  
    // const nav = new ReactMapGL.NavigationControl();
    // map.addControl(nav, "top-right");
    
  //create a handleChange
    let handleChange=(viewport)=>{
      setViewPort(viewport)
    }
  
  //adding a 
  
  
    return (
      <div>
       <ReactMapGL 
       {...viewport} 
       mapboxApiAccessToken={TOKEN}
       mapstyle= "mapbox://styles/ksolomon7/ckgh6bpp7060519pjac0q1pe6"
       onViewportChange={handleChange}
      >
       </ReactMapGL>
      </div>
    );
  }
  
  export default Map;
  