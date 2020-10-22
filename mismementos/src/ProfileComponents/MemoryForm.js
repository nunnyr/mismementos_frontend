import React from 'react'
import { Button, Form, Segment, Header} from 'semantic-ui-react'
// import Autocomplete from '../AutocompletePlace'

class MemoryForm extends React.Component{
 

// state is being used to control input 
    state={
        title:"",
        about:"",
        address:"",
        city:"",
        state:"",
        zipcode: 10027,
        open: false
    }

    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
        // console.log("Handle Change",evt.target.value)
    }

    handleSubmit=(evt)=>{
        let {title, about, address, city, state, zipcode} = this.state
        evt.preventDefault()
        fetch('http://localhost:3000/memories', {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
               title,
               about,
               address,
               city,
               state,
               zipcode
            })
        })
        .then(res => res.json())
        .then(createdMemory => {
            this.props.addMemory(createdMemory)
            // console.log("a memory was created 🥳")
        })
    }

    handleClick=(evt)=>{
        this.setState({
            open: !this.state.open
        })
    }

    render(){
    
        let {title, about, address, city, state, zipcode, open}= this.state
        return(
            <div>
                {open 
                    ?
                <Segment> 
                    <Header size='small'>New Memory</Header>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group unstackable widths={2}>
                                <Form.Input label='Title' name="title" placeholder='Title' value={title} onChange={this.handleChange}/>
                                <Form.Input label='About' name="about" placeholder='About' value={about} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group widths={2}>
                            {/* <Autocomplete onSelect={place => console.log(place)} /> */}
                                <Form.Input label='Address' name="address" placeholder='Address' value={address} onChange={this.handleChange}/>
                                <Form.Input label='City' name="city" placeholder='City' value={city} onChange={this.handleChange}/>
                                <Form.Input label='State' name="state" placeholder='State' value={state} onChange={this.handleChange}/>
                                <Form.Input label='Zipcode' name="zipcode" placeholder='Zipcode' value={zipcode} onChange={this.handleChange}/>
                            </Form.Group>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    <Segment>
                        <Button onClick={this.handleClick}>Close</Button>
                    </Segment>
                </Segment>
                    :
                <Segment>
                     <Button onClick={this.handleClick}>Add A New Memory</Button>
                </Segment>
        }
            </div>
        )
    }
  
}

export default MemoryForm