const initialState = {};

const handleData = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case '':
            null;
        break;
        default: return newState;
    }
}

export default handleData;