import React from 'react';
import MemoryContainer from './MemoryContainer'
import MemoryForm from './MemoryForm'
import { Card, Icon, Image, Segment} from 'semantic-ui-react'


class ProfileContainer extends React.Component {
    
    render(){
        // console.log(this.props)
        let allMemories= this.props.memories.map((singleMemory)=>{ 
            return <MemoryContainer key={singleMemory.id} 
                                    memories={singleMemory}
                                    deleteMemory={this.props.deleteMemory}
                                    token={this.props.token}
                                    addNewNote={this.props.addNewNote}
                                    deleteNote={this.props.deleteNote}

            />
        })
        
       

        let {username, avatar, bio, city, state, zipcode}=this.props
        return(
            <Segment>

                 <Card>
                    <Image src={avatar} wrapped ui={false} />
                    
                    <Card.Content>
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta>
                        <span className='city'>{city}</span>
                        <span className='state'>{state}</span>
                        <span className='zipcode'>{zipcode}</span>
                    </Card.Meta>
                    <Card.Description>
                        {bio}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                    </Card.Content>
                 </Card>
                {allMemories}

                <Segment>
                    <MemoryForm token={this.props.token} addMemory={this.props.addMemory}/>
                </Segment>
             </Segment>
        )

    }
}


export default ProfileContainer;