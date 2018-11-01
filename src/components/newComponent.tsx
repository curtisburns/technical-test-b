import * as React from 'react';
import axios from 'axios';

export default class NewComponent extends React.Component<{}> {
    componentDidMount() {
        console.log('im firing');
        
        axios.get('api/data')
            .then(res => console.log(res.data));
    }
    state = {};

    render() {
        return (
            <h1>Hello auto updated world</h1>
        )
    }
}
