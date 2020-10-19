import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl'
import './App.css';

function App() {
  const TOKEN ="pk.eyJ1Ijoia3NvbG9tb243IiwiYSI6ImNrZ2gzODEzdjA0OHkycWxmOXpkY2VhdDIifQ.lnW9qKBPgt5JkWPhEGml_A"

  const [viewport, setViewPort]= useState({ 
    latitude: 40.730610,
    longitude: -73.935242,
    width: "100vw",
    height: "100vh",
    zoom:10
  });

  return (
    <div>
     <ReactMapGL 
     {...viewport} 
     mapboxApiAccessToken={TOKEN}
     onViewportChange={viewport=>{
       setViewPort(viewport)
     }}>
     </ReactMapGL>
    </div>
  );
}

export default App;
