import * as React from 'react';
import { connect } from 'react-redux';

class Dropdown extends React.Component<any, any> {
    render() {
        return (
            <select>
                {this.props.variables.map((variable, index) =>
                     <option key={index} value={variable}>{variable}</option>
                )}
            </select>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state: any):any => {
    return {
        variables: state.storedData.variableNames
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);