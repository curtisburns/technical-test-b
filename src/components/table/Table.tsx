import * as React from 'react';
import { connect } from 'react-redux';

//Components
import Dropdown from './Dropdown';
import DataError from './DataError';
import Preloader from './Preloader';




interface IResults {
    value?: string;
    count?: number;
    averageAge?: number;
}

interface IProps {
    variables: string[]
    error?: any
    selectedVariable: string;
    results: IResults[];
    omittedResults: number;
    retrievingData: boolean;
}

class Table extends React.Component<IProps> {
    
    render() {
        const renderPreloader = this.props.retrievingData && !this.props.error;
        const renderDataError = this.props.error;
        const renderTable = this.props.variables

        return (
            <section className="table-component">

            { renderPreloader &&
                <Preloader />
            }

            {renderDataError &&
                <DataError />
            }

            {renderTable  &&
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
                        <div className="non-displayed">
                            <h3>There is a further total of {this.props.omittedResults} non-displayed lines.</h3>
                        </div>
                    }
                </div>

            }

            </section>
        )
    }
}


//Whenever the state changes, we need to be able to subscribe it. This is achieved doing the below.

const mapStateToProps = (state) => {
    return {
        variables: state.initialFetch.variableNames,
        error: state.initialFetch.error || state.fetchedData.error,
        selectedVariable: state.fetchedData.selectedVariable,
        results: state.fetchedData.results,
        omittedResults: state.fetchedData.omittedResults,
        retrievingData: state.fetchedData.retrievingData
    }
}

export default connect(mapStateToProps)(Table);
