import React, {PureComponent} from "react";
import {Grid, Card} from 'semantic-ui-react';
import UserCard from '../ProfileCard/ProfileCard';
import LazyLoad from 'react-lazyload';

export default class Users extends PureComponent {
    state = {
        users: null
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => {
                let users = data.result;
                this.setState(() => {
                    return {users: users}
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Grid centered columns={1}>
                <Grid.Column width={13} textAlign='center'>
                    {!this.state.users ? <LoadScreen src="http://gifimage.net/wp-content/uploads/2017/08/loading-animated-gif-1.gif"/> : null}
                    <Card.Group itemsPerRow={5}>
                        {this.state.users.map((user) => (
                            <LazyLoad key={user.id} height={400}>
                                <UserCard user={user}/>
                            </LazyLoad>
                        ))}
                    </Card.Group>
                </Grid.Column>
            </Grid>
        )
    }
}

const LoadScreen = (props) => (
    <img src={props.src}/>
);