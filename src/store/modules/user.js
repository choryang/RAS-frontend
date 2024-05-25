const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const AUTH_USER = 'AUTH_USER';

const initState = {
    id: '',
    name: '',
    contact: '',
    memberCode: 0,
    isAdmin: false,
    isMember: false
}

export const authUser = memberCode => ({
    type: AUTH_USER,
    memberCode
})

export const logout = () => ({
    type: LOGOUT
})

export default function userReducer(state = initState, action) {
    switch (action.type) {
    case LOGIN:
        return {
            ...state
        };
    case LOGOUT:
        return initState;
    case AUTH_USER:
        let isAdmin = false;
        let isMember = false;
        if (action.memberCode < 12) {
            isMember = true;
        }
        if (action.memberCode === 10) {
            isAdmin = true;
        }
        return {
            ...state,
            isMember: isMember,
            isAdmin: isAdmin
        }
    default:
        return state;
  }
}