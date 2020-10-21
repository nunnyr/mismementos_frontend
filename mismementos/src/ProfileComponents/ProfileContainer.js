import React from 'react';
import Map from './Map'
import MemoryForm from './MemoryForm'
import { Header } from 'semantic-ui-react'


class ProfileContainer extends React.Component {
    
    render(){
        return(
            <div>
           <Header as='h1'>Maps</Header>
                <Map/>
                
                <MemoryForm/>
             </div>
        )

    }
}


export default ProfileContainer;