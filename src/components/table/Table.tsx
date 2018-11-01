import * as React from 'react';

interface Props {

}

export default class Table extends React.Component<{}> {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        {/* <th>{props.variableName}</th> */}
                        <th>Count</th>
                        <th>Average age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>

                        </td>
                    </tr>
                </tbody>

            </table>
        )
    }
}
