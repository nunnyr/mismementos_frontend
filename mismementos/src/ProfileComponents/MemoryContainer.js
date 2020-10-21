import React from 'react'
import Map from './Map'
import MemoryForm from './MemoryForm'
import {Header, Segment, Icon, Popup, Card, Button} from 'semantic-ui-react'

class MemoryContainer extends React.Component{



    handleDeleteClick = () => {
        
    } 


    render(){

        
        // console.log("this is memory container", this.props)
        let {title, about, address, city, state, zipcode}= this.props.memories
        console.log("this is the memory count", this.props.memories)
        return(
            <div>
            <Segment>
                    <Popup trigger={<Icon circular name='heart' color="red" />} wide='very'>
                        {title}
                    </Popup>

                    <Button floated="right" onClick={this.handleDeleteClick}> X </Button>

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

                 {/* if(this.props.memories){ */}
                    
                    {/* <MemoryForm token={this.props.token} addMemory={this.props.addMemory}/> */}
                 {/* } */}
                    <MemoryForm token={this.props.token} addMemory={this.props.addMemory}/>
            </div>
        )
    }


// render a map here (might pass markers as props-> need to convert to geocodes)
// render note container as well as notes form that needs to be sent all the way up

}


export default MemoryContainer