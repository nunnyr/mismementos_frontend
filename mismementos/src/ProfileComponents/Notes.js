import React from 'react'
import { Button, Segment} from 'semantic-ui-react'

class Notes extends React.Component{

    
    render(){
        // console.log("this is notes", this.props)
        return(
            <div>
               
                <Segment>
                    <Button floated="right" onClick={this.handleDeleteClick}> X </Button>
                       Reflections: {this.props.reflection}
                </Segment>
            </div>
        )
    }

}

export default Notes