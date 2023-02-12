import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: {
        count: 0
    }
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            console.log("Fiz incremento")
            state.counter.count += 1
            console.log(state.counter.count)
        },

        incrementAmount: (state, action) => {
            state.counter.count += action.payload
        },

        decrement: (state) => {
            state.counter.count -= 1
        },
    }
    
})

export const { increment, decrement, incrementAmount } = counterSlice.actions

export default counterSlice.reducer