import React, {useEffect, useState} from 'react';
import { GeolocateControl } from 'react-map-gl';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import myMemory from '../myMemory'


function Map() {
    const TOKEN ="pk.eyJ1Ijoia3NvbG9tb243IiwiYSI6ImNrZ2gzODEzdjA0OHkycWxmOXpkY2VhdDIifQ.lnW9qKBPgt5JkWPhEGml_A"
  
    const [viewport, setViewPort]= useState({ 
      latitude: 40.730610,
      longitude: -73.935242,
      width: "100vw",
      height: "100vh",
      zoom: 10
    });
  
    const [selectedMemory, setSelectedMemory] = useState(null)
    useEffect(() => {
        const listener  = e => {
        if(e.key === "Escape") {
          setSelectedMemory(null);
        }
      };
        window.addEventListener("keydown", listener);

        return() => {
          window.removeEventListener("keydown", listener)
        }
    }, []);
    
  //create a handleChange
    let handleChange=(viewport)=>{
      setViewPort(viewport)
    }
  
  //adding a 
  
  
    return (
      
       <ReactMapGL 
       {...viewport} 
       mapboxApiAccessToken={TOKEN}
       mapstyle= "mapbox://styles/ksolomon7/ckgh6bpp7060519pjac0q1pe6"
       onViewportChange={handleChange}
      >

      <GeolocateControl
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
      /> 

       {myMemory.map((place) => (
        //  console.log("what is place 😎", place),
        //  console.log("inner part", place.item.coordinates),
         <Marker key={place.item.place_id} latitude={place.item.coordinates[1]} longitude={place.item.coordinates[0]}> 
         
         <button 
           className="heart-btn" 
           onClick={e => {
            e.preventDefault();
            setSelectedMemory(place);
         }} 
         >
           <img src="https://www.clipartkey.com/mpngs/m/24-243570_instagram-heart-transparent-background-red-heart-transparent-background.png" alt="red heart"></img>
         
         </button>
         </Marker>
       ))}

       {selectedMemory ? (
         <Popup latitude={selectedMemory.item.coordinates[1]} longitude={selectedMemory.item.coordinates[0]}
          onClose={()=> {
            setSelectedMemory(null);
          }}
         >
           <div>
            <h2>{selectedMemory.item.name}</h2>
            <p>{selectedMemory.item.description}</p>
           </div>
         </Popup>
        ) : null
        }
       </ReactMapGL>
     
    );
  }
  
  export default Map;
  