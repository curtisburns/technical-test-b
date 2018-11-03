import * as React from 'react';
import { connect } from 'react-redux';

//Components
import Dropdown from './Dropdown';
import DataError from './DataError';
import Preloader from './Preloader';


class Table extends React.Component<any> {
    render() {
        return (
            <section className="table-component">

            { !this.props.data && !this.props.error &&
                <Preloader />
            }

            {this.props.error &&
                <DataError />
            }

            {this.props.data && !this.props.error &&
                <div>
                    <Dropdown />
                
                    <table>
                        <thead>
                            <tr>
                                <th className="rank">#</th>
                                <th className="variable">{this.props.selectedVariable}</th>
                                <th className="count">Count</th>
                                <th className="average-age"> Average age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.results &&
                                this.props.results.map((variable, index) =>
                                    <tr key={index}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {variable.value}
                                        </td>
                                        <td>
                                            {variable.count}
                                        </td>
                                        <td>
                                            {variable.averageAge}
                                        </td>
                                   
                                    </tr> 
                                  )
                                
                            }
                           
                        </tbody>

                    </table>
                    {this.props.omittedResults !== 0 && 
                        <h3>There is a further total of {this.props.omittedResults} non-displayed lines.</h3>
                    }
                </div>

            }

            </section>
        )
    }
}

// This can be put into the select variable dropdown menu.


//Whenever the state changes, we need to be able to subscribe it. This is achieved doing the below.

const mapStateToProps = (state) => {
    return {
        data: state.storedData.data,
        error: state.storedData.error,
        selectedVariable: state.manipulatedData.selectedVariable,
        results: state.manipulatedData.results,
        omittedResults: state.manipulatedData.omittedResults
    }
}

export default connect(mapStateToProps)(Table);
