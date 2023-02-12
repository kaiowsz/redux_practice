import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { increment, decrement } from './counterSlice'

interface myState {
    counter: myCounter
}

interface myCounter {
    count: number;
}


function Counter() {

    const count = useSelector((state: myState) => state.counter.count)
    const dispatch = useDispatch();



    return (
    <section>
        <p>
            {count}
        </p>
        <button onClick={() => dispatch(increment())}>+</button>


    </section>
    )
}

export default Counter