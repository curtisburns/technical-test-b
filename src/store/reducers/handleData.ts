const initialState = {
    data: {},
    results: [],
    selectedVariable: 'N/A',
    omittedResults: 0
};

const handleData = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case 'CHANGE_VARIABLE':
            let variableObj = {}
            const variable = action.variable.toLowerCase();

            if (variable !== 'please select a variable') {
                action.data.forEach(row => {
    
                    // Initial variable breakdown                
                    if (!variableObj[row[variable]]) {
                        variableObj[row[variable]] = {};
                        variableObj[row[variable]].count = 1
                        variableObj[row[variable]].ages = [row.age]
                    } else {
                        variableObj[row[variable]].count++;
                        variableObj[row[variable]].ages.push(row.age);
                    }
                })
    
    
                // Prepares data in array format to be printed in Table component - needs to be sorted!
                let resultsArray = [];
                let omittedResults = 0;
                for (let key in variableObj) {
    
                    let dataObj = {};
    
                    // Calculate the average age
                    const ageArray = variableObj[key].ages;
                    const totalAge = ageArray.reduce((total, val) => total + val);
                    const averageAge = totalAge/ageArray.length
    
                    dataObj['value'] = key;
                    dataObj['count'] = variableObj[key].count;
                    dataObj['averageAge'] = averageAge.toFixed(1);
    
                    
                    resultsArray.push(dataObj);
                }

                // Declare results omitted from query
                if (resultsArray.length > 100) {
                    omittedResults = resultsArray.length - 100;
                }
    
                // Sort data by count and limit to 100 results
                resultsArray = resultsArray.sort(function(a, b){return b.count - a.count}).slice(0, 100);
                return {
                    ...newState,
                    selectedVariable: action.variable,
                    results: resultsArray,
                    omittedResults: omittedResults
                } 
            } else {
                return  {
                    ...newState,
                    selectedVariable: 'N/A',
                    results: []
                }
             }
        default: return newState;
    }
}

export default handleData;