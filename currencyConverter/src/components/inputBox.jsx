import React, { useId } from 'react';

// InputBox Component
export default function InputBox({
    label, // Label for the input box
    amount, // Amount value displayed in the input field
    onAmountChange, // Callback triggered when the amount input changes
    onCurrencyTypeChange, // Callback triggered when the currency selection changes
    currencyOptions = [], // List of available currency options for the dropdown
    selectCurrency = "usd", // Default selected currency in the dropdown
    classname = "" // Additional class for custom styling
}) {
    const amountInputId = useId(); // Generate a unique ID for the input field for accessibility

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
            {/* Amount Input Section */}
            <div className="w-1/2">
                <label
                    htmlFor={amountInputId}
                    className="text-black/40 mb-2 inline-block">
                    {label} {/* Display the label */}
                </label>
                <input
                    id={amountInputId} // Associates the label with the input for accessibility
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number" // Ensures numeric input
                    placeholder="Amount" // Placeholder text for the input
                    value={amount} // Binds the input value to the `amount` prop
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
                    // Trigger the `onAmountChange` callback when the input changes, passing the numeric value
                />
            </div>

            {/* Currency Selection Dropdown Section */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // Binds the selected value to the `selectCurrency` prop
                    onChange={(e) => onCurrencyTypeChange && onCurrencyTypeChange(e.target.value)}
                    // Trigger the `onCurrencyTypeChange` callback when the selection changes, passing the selected value
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency} {/* Display each currency as an option */}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}
