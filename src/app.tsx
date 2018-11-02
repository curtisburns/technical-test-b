import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store/store';

// import axios from 'axios';

import Table from './components/table/Table';


class App extends React.Component<any> {
 

    // componentDidMount() {
    //     axios.get('api/data')
    //         .then(res => {            
    //             const variableNames = [];
                    
    //             for (let key in res.data[0]) {
    //                 if (key !== 'age') {
    //                       variableNames.push(key);
    //                 }
    //             }

    //             this.setState({
    //                 data: res.data,
    //                 variableNames
    //             });
                
    //             console.log(this.state);
               
    //         });       
    // }

    render() {        
        return (
            
                <main>
                    <Table/>
                </main>
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById("root")
);

store.dispatch({ type: 'GET_DEMOGRAPHIC_DATA' });