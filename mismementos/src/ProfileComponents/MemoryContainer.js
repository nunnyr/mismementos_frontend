import React from 'react'
import Notes from './Notes'
import NotesForm from './NotesForm'
import UpdateMemoryForm from './UpdateMemoryForm'
import NotesHeader from './NotesHeader'
import { Header, Segment, Icon, Popup, Card, Button} from 'semantic-ui-react'

class MemoryContainer extends React.Component{


    state={
        showComponent: false
    }

    handleDeleteClick = (evt) => {
        fetch(`http://localhost:3000/memories/${this.props.memories.id}`, {
            method:"DELETE"
        })
        .then(resp=>resp.json())
        .then(deletedMemory=>{
            this.props.deleteMemory(deletedMemory.id)})
        // console.log("handleDeleteClick", this.props.memories.id)
    } 

    
    renderEditForm=()=>{
        // console.log("in render edit")
        this.setState({
            showComponent:!this.state.showComponent
        })
    }




    render(){

        let notesArray= this.props.memories.notes.map((singleNote)=>{
            // console.log("this is single note", singleNote.id)
            return <Notes key={singleNote.id}
                          memories={this.props.memories}
                          id={singleNote.id}
                          reflection={singleNote.reflection}  
                          deleteNote={this.props.deleteNote}/> 
        })

        // console.log("this is memory container", this.props)

        let {title, about, address, city, state, zipcode}= this.props.memories
        return(
            <div>
                <Header size='small'>Memories</Header>
            <Segment>
                    <Popup trigger={<Icon circular name='heart' color="red" />} wide='very'>
                        {title}
                    </Popup>

                    <Button floated="right" color="google plus" onClick={this.handleDeleteClick}> X </Button>
                    <Button floated="right" color="linkedin" onClick={this.renderEditForm}>Get Edit Memory Button</Button>
                    
 
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
            {this.state.showComponent ?
                     <UpdateMemoryForm updateMemory={this.props.updateMemory} memories={this.props.memories}/> 
                            :
                        null
                    }
            {notesArray}   
            <NotesHeader />
            <NotesForm token={this.props.token}  memory={this.props.memories}  addNewNote={this.props.addNewNote}/>
            </div>
        )
    }

// need to pass down notes container to add notes.
// render a map here (might pass markers as props-> need to convert to geocodes)
// render note container as well as notes form that needs to be sent all the way up

}


export default MemoryContainer