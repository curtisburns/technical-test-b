import * as React from 'react';
import { connect } from 'react-redux';

class Dropdown extends React.Component<any, any> {
    render() {
        return (
            <select>
                {this.props.variables.map(variable =>
                     <option value="{variable}">{variable}</option>
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
        variables: state.variable
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);