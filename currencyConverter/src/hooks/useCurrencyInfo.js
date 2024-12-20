import { useEffect, useState } from "react";

// Custom hook to fetch currency information
export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // State to store the fetched currency data

    useEffect(() => {
        // Fetching currency data from the API
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json()) // Convert the response to JSON
            .then((res) => setData(res[currency])); // Update state with currency-specific data

        console.log(data); // Log the fetched data to verify the state
    }, [currency]); // Effect runs whenever the `currency` dependency changes

    return data; // Return the fetched data to be used by the component
}
