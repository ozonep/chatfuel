import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const UserCard = (props) => {
    const {name, avatarUrl, id} = props.user;
    return (
        <Card raised>
            <Image src={avatarUrl}/>
            <Card.Content textAlign="center">
                <Card.Header as={Link} to={'/'+ id}>
                    {name}
                </Card.Header>
            </Card.Content>
        </Card>
    )
};

export default UserCard;