const initialState = []

const userList = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return [...state, action.user];
        case 'SET_USERLIST':
            // console.log(action.userList);
            return action.userList;
        default:
            return state;
    }
}

export default userList;