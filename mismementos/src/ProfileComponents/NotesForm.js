import React from 'react'
import { Button, Form, Segment, Header} from 'semantic-ui-react'

class NotesForm extends React.Component{

    state={
        open:false,
        reflections: " "
    }

    handleChange=()=>{
        console.log("in change")
    }

    render(){
            return(
                <div>
                    {this.state.open 
                        ?
                    <Segment> 
                        <Header size='small'>New Memory</Header>
    
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group unstackable widths={2}>
                                    <Form.Input label='Reflections' name="reflection" placeholder='Reflection' value={this.state.reflection} onChange={this.handleChange}/>
                                </Form.Group>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        <Segment>
                            <Button onClick={this.handleClick}>Close</Button>
                        </Segment>
                    </Segment>
                        :
                    <Segment>
                         <Button onClick={this.handleClick}>Add A New Reflection</Button>
                    </Segment>
            }
                </div>
            )
    }
}

export default NotesForm