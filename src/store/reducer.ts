interface IState {
    data: any;
    variableNames?: string[];
}

const initialState: IState = {
    data: '',
    variableNames: [],
};

// This takes an initialState and action
const reducer = (state = initialState, action) => {
    const newState = {...state};
    // switch(action.type) {
    //     case: ''
    // }
    return newState;
}

export default reducer;