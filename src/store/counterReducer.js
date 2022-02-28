export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


const init = {
    counter: 1,
}

const countReducer = (state = init, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export default countReducer;