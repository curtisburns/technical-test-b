import * as React from 'react';
import axios from 'axios';

export default class NewComponent extends React.Component<{}> {
    state = {
        data: []
    };

    componentDidMount() {
        axios.get('api/data')
            .then(res => {
                this.setState({data:res.data});
                console.log(this.state);
            })
    }
   

    render() {
        return (
            <h1>Hello auto updated world</h1>
        )
    }
}
