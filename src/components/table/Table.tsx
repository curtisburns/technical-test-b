import * as React from 'react';
import Dropdown from './Dropdown';
import { connect } from 'react-redux';

class Table extends React.Component<any> {
    render() {
        return (
            <section>
            { !this.props.data &&
                <div>
                    <img src="src/assets/logo/birdie_logo_grey.svg" alt="Loading data"/>
                    <h2>Loading data</h2>
                </div>
                }
            {this.props.data &&
              <Dropdown />
            /* // <table>
            //     <thead>
            //         <tr>
            //             <th>#</th>
            //             <th>{this.props.variableNames[0]}</th>
            //             <th>Count</th>
            //             <th>Average age</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         <tr>
            //             <td>

            //             </td>
            //         </tr>
            //     </tbody>

            // </table> */
            }
          
          
            </section>
        )
    }
}


// // This is used to map our action to props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         insertFunction: () => dispatch({type: 'SELECT_VARIABLE'})
//     }
// }

//This can be put into the select variable dropdown menu.


//Whenever the state changes, we need to be able to subscribe it. This is achieved doing the below.
//Same as mapStoreToProps = (store) 

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps)(Table);
