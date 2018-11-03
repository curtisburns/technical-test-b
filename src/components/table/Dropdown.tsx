import * as React from 'react';
import { connect } from 'react-redux';

class Dropdown extends React.Component<any, any> {

    handleChange= ({target: { value }}) => {
        this.props.handleChange(value);
    }

    render() {
        return (
            <div className="dropdown-component">
                <h4>Variable</h4>
                <select onChange={this.handleChange}>
                    {this.props.variables.map((variable, index) =>
                        <option key={index} value={variable}>{variable}</option>
                    )}
                </select>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (val) => {
            dispatch({type: 'RETRIEVE_DATA', variable: val});
            dispatch({type: 'RETRIEVING_DATA', variable: val});
        }
    }
}

const mapStateToProps = (state: any):any => {
    return {
        variables: state.initialFetch.variableNames,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);