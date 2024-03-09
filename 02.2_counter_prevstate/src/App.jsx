import { useState } from 'react';
import './App.css';

function App() {
  let [noOfTickets, setnoOfTickets] = useState(0);
  const addValue = () => {
    setnoOfTickets((prevCountOfTickets) => prevCountOfTickets + 1);
    setnoOfTickets((prevCountOfTickets) => prevCountOfTickets + 1);
    setnoOfTickets((prevCountOfTickets) => prevCountOfTickets + 1);
    setnoOfTickets((prevCountOfTickets) => prevCountOfTickets + 1);
    setnoOfTickets((prevCountOfTickets) => prevCountOfTickets + 1);
    console.log(noOfTickets);
  };
  const subtractValue = () => {
    setnoOfTickets(noOfTickets - 1);
    console.log(noOfTickets);
  };
  return (
    <>
      <h2>Ticket Counter</h2>

      <section className='counter'>
        <div className='tickets-selected'>
          Tickets Selected:{' '}
          <span className='ticket-counter-value'>{noOfTickets}</span>
        </div>
        <div>
          <button className='add-button' onClick={addValue}>
            +
          </button>
          <button className='remove-button' onClick={subtractValue}>
            -
          </button>
          <button className='reset-button'>Reset</button>
        </div>
      </section>

      <section className='price'>
        <div>Price</div>
        <p>
          Tickets: <span className='ticket-counter-value'>{noOfTickets}</span>
        </p>
        <p>Ticket Price per person is $50</p>
        <p>
          Total Cost: ${noOfTickets * 50}
          <span className='total-cost'>0</span>
        </p>
      </section>

      <section className='confirm-tickets'>
        <div>
          Confirm Tickets:{' '}
          <span className='ticket-counter-value'>{noOfTickets}</span>
        </div>
        <button>Confirm</button>
        <p className='ticket-confirm-message'></p>
      </section>
    </>
  );
}

export default App;
