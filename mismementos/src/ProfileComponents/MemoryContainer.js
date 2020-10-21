import React from 'react'
// import Map from './Map'
// import MemoryForm from './MemoryForm'
import {Header, Segment, Icon, Popup,Card} from 'semantic-ui-react'

class MemoryContainer extends React.Component{

    render(){
        // console.log("this is memory container", this.props)
        let {title, about, address, city, state, zipcode}= this.props.memories
        
        return(
            <Segment>
                    <Popup trigger={<Icon circular name='heart' />} wide='very'>
                        {title}
                    </Popup>
                    <Card.Description>
                        <span>About: {about}</span> 
                    </Card.Description>
                    <br/>
                    <Card.Description>
                        <span>Address: {address}</span>     
                    </Card.Description>
                    <Card.Description>
                        <span>City: {city}</span>
                    </Card.Description>
                    <Card.Description>
                        <span>State: {state}</span> 
                    </Card.Description>
                    <Card.Description>
                        <span>Zipcode: {zipcode}</span>
                    </Card.Description>
            </Segment>
        )
    }


// render a map here (might pass markers as props-> need to convert to geocodes)
// render note container as well as notes form that needs to be sent all the way up

}


export default MemoryContainer