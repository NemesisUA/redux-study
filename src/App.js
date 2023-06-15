import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, deleteCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

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

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now()
    };

    dispatch(addCustomerAction(customer))
  }

  const deleteCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div className='cash-value'>Balance: ${cash}</div>

      <button onClick={() => addCash(Number(prompt('Add, $', '')))} >
        Add Cash
      </button>

      <button onClick={() => getCash(Number(prompt('Get, $', '')))} >
        Remove Cash
      </button>

      <br />

      <button onClick={() => addCustomer(prompt('Enter Customer Name:', ''))} >
        Add Customer
      </button>

      <div>
        {customers.length > 0 ? 
        <ul>
          {customers.map(customer => 
            <li onClick={() => deleteCustomer(customer)} className='customer-styles'>
              {customer.name}
            </li>
          )}
        </ul>
        : 
        <div style={{fontSize: "2rem"}}>There are no customers!</div>
        }
      </div>
      
    </div>
  );
}

export default App;
