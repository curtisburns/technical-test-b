import * as React from "react";
import * as ReactDOM from "react-dom";
import NewComponent from './components/newComponent';

class App extends React.Component<{}> {
    render() {
        return (
            <NewComponent></NewComponent>
        )
    }
}


ReactDOM.render(
        <App />,
  document.getElementById("root")
);