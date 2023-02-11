import { createStore } from "redux"

const initialState = {
    counter: {
        value: 2
    }
}

function reducer(state = { value: 0 }, action: any) {
    switch(action.type) {
        case "increment": 
            return console.log("increment")
        
        default: 
            return console.log("defualt.")
    }
}

export const mystore = createStore(reducer)