import React from 'react'
import Notes from './Notes'
import { Segment, Icon, Popup, Card, Button} from 'semantic-ui-react'

class MemoryContainer extends React.Component{



    handleDeleteClick = (evt) => {
        fetch(`http://localhost:3000/memories/${this.props.memories.id}`, {
            method:"DELETE"
        })
        .then(resp=>resp.json())
        .then(deletedMemory=>
            this.props.deleteMemory(deletedMemory.id))
        // console.log("handleDeleteClick", this.props.memories.id)
    } 


    render(){

        let notesArray= this.props.memories.notes.map((singleNote)=>{
            return <Notes key={singleNote.id}
                          reflection={singleNote.reflection}  /> 
        })
        // console.log("this is memory container", this.props)
        let {title, about, address, city, state, zipcode}= this.props.memories
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
            {notesArray}       
            </div>
        )
    }


// render a map here (might pass markers as props-> need to convert to geocodes)
// render note container as well as notes form that needs to be sent all the way up

}


export default MemoryContainer