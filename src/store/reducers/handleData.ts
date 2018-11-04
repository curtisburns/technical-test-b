interface IState {
    results: IResults[];
    selectedVariable: string;
    omittedResults: number;
    retrievingData: boolean;
    error?: any;
}

interface IResults {
    value?: string;
    count?: number;
    averageAge?: number;
}

const initialState: IState = {
    results: [],
    selectedVariable: 'N/A',
    omittedResults: 0,
    retrievingData: false
};

const handleData = (state = initialState, action) => {
    const newState = {...state};
  
    switch(action.type) {
        case 'CANNOT_RETRIEVE_DATA_ASYNC':
        return {
            ...newState,
            selectedVariable: action.variable,
            results: [],
            omittedResults: 0,
            retrievingData: false,
            error: action.err
        }
        case 'RETRIEVING_DATA':
        if ( action.variable !== 'Please select a variable') {
            return {
                ...newState,
                retrievingData: true,
                selectedVariable: action.variable,
                results: [],
                omittedResults: 0,
                error: ''
            }
        } else {
            return {
                ...newState,
                selectedVariable: 'N/A',
                results: [],
                omittedResults: 0,
                error: ''
            }
        }
        case 'RETRIEVE_DATA_ASYNC':
            if ( action.variable !== 'Please select a variable') {
                const variable = action.variable.toLowerCase();
                
                // Counts values and prepares ages
                const valuesObj = {};

                action.data.forEach(row => {
                    if (!valuesObj[row[variable]]) {
                        valuesObj[row[variable]] = {};
                        valuesObj[row[variable]].count = 1
                        valuesObj[row[variable]].ages = [row.age]
                    } else {
                        valuesObj[row[variable]].count++;
                        valuesObj[row[variable]].ages.push(row.age);
                    }
                })

                // Prepares data in array format to be printed in Table component - needs to be sorted!
                let resultsArray = [];


                for (let value in valuesObj) {

                    let valueObj = {};

                    // Calculate the average age
                    const ageArray = valuesObj[value].ages;
                    const totalAge = ageArray.reduce((total, val) => total + val);
                    const averageAge = totalAge/ageArray.length

                    valueObj['value'] = value;
                    valueObj['count'] = valuesObj[value].count;
                    valueObj['averageAge'] = parseFloat(averageAge.toFixed(1));
  
                    resultsArray.push(valueObj);
                }

                // Declare results omitted from query
                let omittedResults = 0;

                if (resultsArray.length > 100) {
                    omittedResults = resultsArray.length - 100;
                }

                // Sort data by count and limit to 100 results
                resultsArray = resultsArray.sort(function(a, b){return b.count - a.count}).slice(0, 100);
                
                return {
                    ...newState,
                    selectedVariable: action.variable,
                    results: resultsArray,
                    omittedResults: omittedResults,
                    retrievingData: false
                } 
            } else {
                return  {
                    ...newState,
                    selectedVariable: 'N/A',
                    results: [],
                    omittedResults: 0,
                    error: ''
                }
            }
        default: return newState;
    }
}

export default handleData;