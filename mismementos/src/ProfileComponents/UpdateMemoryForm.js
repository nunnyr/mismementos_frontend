import React from 'react'
import { Header, Segment, Form, Button} from 'semantic-ui-react'
class UpdateMemoryForm extends React.Component{


    state={
        title: this.props.memories.title,
        about:this.props.memories.about,
        address:this.props.memories.address,
        city:this.props.memories.city,
        state:this.props.memories.state,
        zipcode:this.props.memories.zipcode,
        open:false
    }

    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

     handleClick=(evt)=>{
        this.setState({
          open: !this.state.open
        })
     }


     handleSubmit=(evt)=>{
        let {title, about, address, city, state, zipcode} = this.state
        evt.preventDefault()
        fetch(`http://localhost:3000/memories/${this.props.memories.id}`, {
            method: "PATCH",
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
        .then(updatedMemory => {
            this.props.updateMemory(updatedMemory)
            this.setState({
                title,
                about,
                address,
                city,
                state,
                zipcode
            })
            // console.log("a memory was created 🥳")
        })
    
    }


    render(){
        let {title, about, address, city, state, zipcode,open}= this.state
        // console.log("in memory update form", this.props)
        return (
            <div>
            {open 
                ?
            <Segment> 
                <Header size='small'>Edit Memory</Header>

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
                 <Button color="twitter" onClick={this.handleClick}>Edit Memory</Button>
            </Segment>
    }
        </div>
        )
    }
}


export default UpdateMemoryForm