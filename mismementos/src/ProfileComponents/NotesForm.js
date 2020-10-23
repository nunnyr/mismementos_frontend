import React from 'react'
import { Button, Form, Segment, Header} from 'semantic-ui-react'

class NotesForm extends React.Component{

    state={
        reflection:"",
        open:false,
        reflections: " "
    }

    handleClick=(evt)=>{
       this.setState({
           open: !this.state.open
       })
    }
    
    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        })
       
    }

    handleSubmit=(evt)=>{
        evt.preventDefault()
        fetch('http://localhost:3000/notes', {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
                // "authorization": this.props.token
            },
            body: JSON.stringify({
               reflection: this.state.reflection,
               memory_id:this.props.memory.id 
            })
        })
        .then(res => res.json())
        .then(createdNote=> {
            this.props.addNewNote(createdNote, this.props.memory.id)
            this.setState({
                reflection: " "
            })
        })
    }

    render(){
        console.log("in new form", this.props)
            return(
                <div>
                    {this.state.open 
                        ?
                    <Segment> 
                        <Header size='small'>New Reflection</Header>
    
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