import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit"
const initialCounterState = {
    value: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'increment':
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             }
//         case 'increase':
//             return {
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             }
//         case 'decrement':
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             }
//         case 'toggle':
//             return {
//                 ...state,
//                 showCounter: !state.showCounter
//             }
//         default:
//             return state
//     }
// }


// const store = createStore(counterReducer);

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;