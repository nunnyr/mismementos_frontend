import React from 'react';
import MemoryContainer from './MemoryContainer'
import { Card, Icon, Image,Segment } from 'semantic-ui-react'


class ProfileContainer extends React.Component {
    
    render(){
       
        // if(this.props.memories)
        //Why are memories not being passed down and if there are no memories 
        //then the form 100% needs to show up to add

        
        let allMemories= this.props.memories.map((singleMemory)=>{ 
            return <MemoryContainer key={singleMemory.id} 
                                    memories={singleMemory}
                                    addMemory={this.props.addMemory}
                                    token={this.props.token}

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
                    <a>
                        <Icon name='user' />
                    </a>
                    </Card.Content>
                 </Card>

                {allMemories}
                
             </Segment>
        )

    }
}


export default ProfileContainer;