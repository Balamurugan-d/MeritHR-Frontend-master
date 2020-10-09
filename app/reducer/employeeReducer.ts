
export default (state = {}, action) => {
    switch (action.type) {
        case 'GETEMPLOYEES':
            return Object.assign({}, state, { employees: action.data });
        default:
            return state;
    }
}