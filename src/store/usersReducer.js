import axios from "axios"

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchSuccess = (payload) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload
    }
}

const init = {
    loading: false,
    users: [],
    error: '',
}

const usersReducer = (state = init, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }    
            case FETCH_USERS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error:'',
                    users: action.payload
                }   
                case FETCH_USERS_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload,
                        users: []
                    } 
        default:
            return state
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            const users =res.data;
            // dispatch({type: FETCH_USERS_SUCCESS, payload:users})
            dispatch(fetchSuccess(users))
        })
        .catch((error) => {
            dispatch({type: FETCH_USERS_FAILURE, payload:error.message})

        })
    }
}

export default usersReducer