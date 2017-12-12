import React, {PureComponent} from "react";
import {Grid, Item, Icon, Input, Button} from 'semantic-ui-react';

export default class Users extends PureComponent {
    state = {
        user: null,
        name: null
    };

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        fetch('/api/user' + this.props.match.params.id)
            .then(res => res.json())
            .then(data => {
                let user = data.result;
                this.setState(() => {
                    return {user: user}
                });
            })
            .catch(err => console.log(err));
    };

    changeData = () => {
        let url = '/api/users/' + this.props.match.params.id;
        let data = {
            name: this.state.name,
            avatarUrl: this.state.user.avatarUrl
        };
        let fetchData = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        };
        fetch(url, fetchData)
            .then(() => console.log('do something'))
            .catch(err => console.log(err));
    };

    render() {
        const {name, avatarUrl} = this.state.user;
        return (
            <Grid centered columns={1}>
                <Grid.Column width={13}>
                    {!this.state.user ? <LoadScreen src="http://gifimage.net/wp-content/uploads/2017/08/loading-animated-gif-1.gif"/> : null}
                    <Item>
                        <Item.Image size='large' src={avatarUrl} />
                        <Item.Content>
                            <Item.Header>{name}</Item.Header>
                            {this.props.curUser === 'admin' ? <AdminInput/> : null}
                            {(this.props.curUser === 'admin') &&
                            <Input type='text' placeholder={name} action onChange={e => {this.setState({name: e.target.value})}}>
                                <Button type='submit' onclick={this.changeData()}>Submit</Button>
                            </Input>}
                            <Item.Meta>Active user</Item.Meta>
                            <Item.Description>
                                Some info about user
                            </Item.Description>
                            <Item.Extra><Icon color='green' name='check'/> 146% user</Item.Extra>
                        </Item.Content>
                    </Item>
                </Grid.Column>
            </Grid>
        )
    }
}

const LoadScreen = (props) => (
    <img src={props.src}/>
);
