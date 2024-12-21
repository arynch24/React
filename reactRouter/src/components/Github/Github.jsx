// Importing necessary React hooks and router functions
import React from 'react';
import { useLoaderData } from 'react-router-dom';

// Github component to display user data fetched from GitHub API
function Github() {
    // Using `useLoaderData` to access the data provided by the loader
    const data = useLoaderData();

    // Uncommented block for manual fetch using useEffect (not needed since you're using the loader)
    /*
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/arynch24')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        });
    }, []);
    */

    return (
        <div className="text-center m-4 bg-orange-600 text-white p-4 text-3xl">
            {/* Displaying the number of followers and the avatar image */}
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    );
}

export default Github;

// Loader function to fetch GitHub user data
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Navneet0094');
    // Returning the JSON response to be used by `useLoaderData` in the Github component
    return response.json();
};
