interface IState {
    data: any;
    variableNames?: string[];
    error?: string
}

const initialState: IState = {
    data: '',
    variableNames: [],
};

// This takes an initialState and action
const setData = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case 'RETRIEVED_DATA':
            const variableNames = [];
                for (let key in action.data[0]) {
                    if (key !== 'age') {
                        const variable: string = key.charAt(0).toUpperCase() + key.substr(1);
                          variableNames.push(variable);
                    }
                };
            return  {
                ...newState,
                data: action.data,
                variableNames
            }
        case 'CANNOT_RETRIEVE_DATA':
            return {
                ...newState,
                error: action.err
            }
        default: 
            return newState;
    }
}

export default setData;