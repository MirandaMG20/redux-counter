import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'
import styles from './Counter.module.css'

function Counter() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label='Increment Value'
                    onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span className={styles.value}> {count} </span>
                <button
                    className={styles.button}
                    aria-label='Decrement Value'
                    onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter