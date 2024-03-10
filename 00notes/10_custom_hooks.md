## Custom Hooks
- Custom hooks are a powerful feature in React that allow you to extract and reuse logic across different components. A custom hook is essentially a JavaScript function that starts with the word "use" and can call other hooks or perform any logic necessary. 

### Example

`hooks/useCurrencyInfo.js`

```
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
```

`App.jsx`

```
import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className='flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label='To'
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button
              type='submit'
              className='w-full px-4 py-3 text-white bg-blue-600 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
```

`components/InputBox.jsx`

```
import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
```

`components/index.js`

```
import InputBox from './InputBox'

export {InputBox}
```



## Explaination
- The useCurrencyInfo custom hook is responsible for fetching currency exchange information from an API based on the provided currency code.
  
    - *Purpose*:The hook is used to fetch currency information for a given currency code from a third-party API.
    - *Dependencies*:useEffect and useState from React are used to handle the asynchronous data fetching and manage the state.
    - *Functionality*:The useEffect hook triggers the API request when the currency dependency changes (initially or when the currency code is updated).
      - The fetched data is stored in the data state variable.
    - *Return Value*:The hook returns the data state variable, which contains the information about the specified currency.

- In the App.jsx file, the useCurrencyInfo custom hook is used to fetch currency information for the selected "from" currency. Here's how it's utilized:
  - *Usage*:The hook is used to get information about the currency specified by the from state variable.
  - *State Variables*:State variables (amount, from, to, convertedAmount) are managed using the useState hook.
  - *Conversion Logic*: The application allows users to input an amount and select "from" and "to" currencies.
    - The useCurrencyInfo hook is used to fetch the exchange rate for the "from" currency.
  - *Swap and Convert Functions*:
    - The swap function swaps the "from" and "to" currencies, enabling bidirectional currency conversion.
    - The convert function calculates the converted amount based on the selected currencies and exchange rate.
  - *Component Structure*:The component structure includes an input box for entering the amount, selecting currencies, and buttons for swapping and converting.

- The InputBox component is a reusable component used for input fields related to currency conversion. It includes fields for entering the amount and selecting the currency type.
  - *Props*:The component receives various props, such as label, amount, onAmountChange, onCurrencyChange, etc., to customize its behavior.
  - *ID Generation*: The useId hook is used to generate unique IDs for accessibility (for associating labels with input fields).

### Benefits of Custom Hooks
- **Code Reusability**:The useCurrencyInfo custom hook encapsulates the logic for fetching currency information, making it reusable across different components.
- **Separation of Concerns**:The custom hook separates the logic for data fetching from the rendering logic of the component, promoting cleaner and more maintainable code.
- **Abstraction**:Components using the custom hook don't need to worry about the details of data fetching and state management; they simply consume the result.
- **Consistent Logic**:Ensures consistent and centralized logic for a specific concern (in this case, fetching currency information).