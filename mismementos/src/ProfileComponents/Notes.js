import React from 'react'
import { Header, Segment} from 'semantic-ui-react'

class Notes extends React.Component{

    
    render(){
        // console.log("this is notes", this.props)
        return(
            <div>
                <Header size='small'>Notes:</Header>
                <Segment>
                       Reflections: {this.props.reflection}
                </Segment>
            </div>
        )
    }

}

export default Notes