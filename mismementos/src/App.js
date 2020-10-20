import React from 'react';
import Map from './Map'
import MemoryForm from './MemoryForm'
import './App.css';

class App extends React.Component {
 
  render(){
    return (
      <div>
         <MemoryForm/>
         <Map/>
      </div>
    ) 
  }


}

export default App;
