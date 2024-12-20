import { useState } from 'react'; // Importing useState for state management
import { InputBox } from './components'; // Importing custom InputBox component
import useCurrencyInfo from './hooks/useCurrencyInfo'; // Importing custom hook for fetching currency data

function App() {
  // State variables for amount, currencies, and converted amount
  const [amount, setAmount] = useState(0); // Amount entered by the user
  const [from, setFrom] = useState('usd'); // Source currency (default: USD)
  const [to, setTo] = useState('inr'); // Target currency (default: INR)
  const [convertedAmount, setConvertedAmount] = useState(0); // Result of conversion

  // Fetching currency data using the custom hook for the selected "from" currency
  const currencyInfo = useCurrencyInfo(from);

  // Extracting available currency options from the currencyInfo object
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  /**
   * Swaps the "from" and "to" currencies, as well as their corresponding amounts.
   * Uses a temporary variable to avoid overwriting values incorrectly.
   */
  const swap = () => {
    setFrom(to); // Set "from" currency to the current "to" currency
    setTo(from); // Set "to" currency to the current "from" currency
    const tempAmount = amount; // Temporarily store the current amount
    setAmount(convertedAmount); // Update the amount with the converted value
    setConvertedAmount(tempAmount); // Set the converted amount with the original amount
  };

  /**
   * Converts the entered amount from the "from" currency to the "to" currency.
   * Uses the exchange rate fetched from the custom hook.
   */
  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]); // Perform conversion using exchange rate
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      {/* Wrapper for the entire app */}
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* Form for conversion */}
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission behavior
              convert(); // Trigger conversion logic
            }}
          >
            {/* Input box for the "from" currency */}
            <div className="w-full mb-1">
              <InputBox
                label="From" // Label for the input box
                amount={amount} // Current amount value
                currencyOptions={options} // Dropdown options for currency selection
                onCurrencyTypeChange={(currency) => setFrom(currency)} // Update "from" currency
                selectCurrency={from} // Selected currency for the dropdown
                onAmountChange={(amount) => setAmount(amount)} // Update the amount value
              />
            </div>
            {/* Swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} // Call swap function on click
              >
                Swap
              </button>
            </div>
            {/* Input box for the "to" currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To" // Label for the input box
                amount={convertedAmount} // Converted amount to display
                currencyOptions={options} // Dropdown options for currency selection
                onCurrencyTypeChange={(currency) => setTo(currency)} // Update "to" currency
                selectCurrency={to} // Selected currency for the dropdown
                amountDisable // Disable the input for "to" amount
              />
            </div>
            {/* Convert button */}
            <button
              type="submit" // Trigger form submission
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
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
