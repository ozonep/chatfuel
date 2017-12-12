const initialState = {
    curUser: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHORIZEADMIN':
            return {
                curUser: 'admin'
            };
        case 'AUTHORIZEUSER':
            return {
                curUser: 'user'
            };
        default:
            return state;
    }
};

export default reducer;

