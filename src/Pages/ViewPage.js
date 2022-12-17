import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../Services/CounterSlice'

const ViewPage = () => {
    const count = useSelector(state => state.CounterReducer.counter)

    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter:{count} </h2>
            <button onClick={() => { dispatch(increment()) }}>INCREMENT</button>
            <button onClick={() => { dispatch(decrement()) }}>DECREMENT</button>
            <button onClick={() => { dispatch(reset()) }}>RESET</button>
        </div>
    )
}

export default ViewPage
