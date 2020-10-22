import React from 'react'
import { Segment} from 'semantic-ui-react'
class Notes extends React.Component{

    render(){
        console.log("this is notes", this.props)
        return(
            <Segment.Group stacked >
            <Segment>Reflections: {this.props.reflection}</Segment>
          </Segment.Group>
        )
    }

}

export default Notes