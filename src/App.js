import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  const addCash = (value) => {
    dispatch({
      type: 'ADD_CASH',
      payload: value
    })
  }

  const getCash = (value) => {
    dispatch({
      type: 'GET_CASH',
      payload: value
    })
  }

  return (
    <div className="App">
      <div className='cash-value'>{cash}</div>

      <button onClick={() => addCash(Number(prompt('Add, $', '')))} >
        Add Cash
      </button>

      <button onClick={() => getCash(Number(prompt('Get, $', '')))} >
        Remove Cash
      </button>
      
    </div>
  );
}

export default App;
