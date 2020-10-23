import React from 'react'
import { Button, Segment} from 'semantic-ui-react'

class Notes extends React.Component{

    
    handleDeleteClick=(evt)=>{
        // console.log("in delete note",this.props.memories.id)
        fetch(`http://localhost:3000/notes/${this.props.id}`, {
            method:"DELETE"
        })
        .then(resp=>resp.json())
        .then(deletedNote=>{
            this.props.deleteNote(deletedNote, this.props.memories.id)})
    }



    render(){
        // console.log("this is notes", this.props)
        return(
            <div>
               
                <Segment>
                    <Button floated="right" size="tiny" onClick={this.handleDeleteClick} color="red"> X </Button>
                       Reflections: {this.props.reflection}
                </Segment>
            </div>
        )
    }

}

export default Notes