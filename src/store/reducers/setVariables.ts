interface IState {
    variableNames?: string[];
    error?: string
}

const initialState: IState = {
    variableNames: [],
};

// This takes an initialState and action
const setData = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case 'RETRIEVED_COLUMN_HEADERS':
            const variableNames = action.variableNames;
            variableNames.unshift('Please select a variable');
            return  {
                ...newState,
                variableNames
            }
        case 'CANNOT_RETRIEVE_COLUMN_HEADERS':
            return {
                ...newState,
                error: action.err
            }
        default: 
            return newState;
    }
}

export default setData;