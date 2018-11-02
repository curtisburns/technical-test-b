import * as React from 'react';
import { connect } from 'react-redux';

class Dropdown extends React.Component<any, any> {

    handleChange= ({target: { value }}) => {
        console.log(value);
        this.props.handleChange(value, this.props.data);
    }

    render() {
        return (
            <select onChange={this.handleChange}>
                {this.props.variables.map((variable, index) =>
                     <option key={index} value={variable}>{variable}</option>
                )}
            </select>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (val, data) => dispatch({type: 'CHANGE_VARIABLE', variable: val, data: data})
    }
}

const mapStateToProps = (state: any):any => {
    return {
        variables: state.storedData.variableNames,
        data: state.storedData.data
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);