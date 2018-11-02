import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

// Styling
import './scss/style.scss';

// Components
import Table from './components/table/Table';


class App extends React.Component<any> {
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