import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from 'axios';

// import Table from './components/table/Table';

class App extends React.Component<{}> {
    state = {
        data: [],
        tableHeaders:[]
    };   

    componentDidMount() {
        axios.get('api/data')
            .then(res => {            
                const variableNames = [];
                    
                for (let key in res.data[0]) {
                    if (key !== 'age') {
                          variableNames.push(key);
                    }
                }

                this.setState({
                    data: res.data,
                    tableHeaders: variableNames
                });
                
                console.log(this.state);
               
            });       
    }

    render() {        
        return (
            // <Table data={this.state.data}></Table>
            null
        )
    }
}


ReactDOM.render(
        <App />,
  document.getElementById("root")
);