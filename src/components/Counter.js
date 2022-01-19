import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" })
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () => {
    // dispatch({ type: "increment" })
    dispatch(counterActions.increment())
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" })
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 10 })
    dispatch(counterActions.increase(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
