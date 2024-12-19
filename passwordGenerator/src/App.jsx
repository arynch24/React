import { useCallback, useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  // State to manage password length, character inclusion, number inclusion, and generated password
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // Function to generate a random password based on user preferences
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Include numbers and special characters if selected
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    // Generate password of specified length
    for (let i = 0; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  // Regenerate password whenever dependencies (length, charAllowed, numberAllowed) change
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  // Reference to the password input field for clipboard functionality
  const passwordRef = useRef(null);

  // Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the password input field text
    passwordRef.current?.setSelectionRange(0, 99); // For mobile compatibility
    window.navigator.clipboard.writeText(password); // Copy to clipboard
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white">
        {/* Title */}
        <h1 className='text-3xl text-center text-white p-4'>Password Generator</h1>

        {/* Password display and copy button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            className="outline-none w-full py-1 px-3 text-black"
            placeholder='Enter Password'
            value={password}
            type='text'
            readOnly
            ref={passwordRef}
          />
          <button 
            className='bg-blue-600 text-white p-2'
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        {/* Controls for password generation */}
        <div className='flex text-md gap-x-4'>
          {/* Length slider */}
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={0}
              max={50}
              value={length}
              onChange={(e) => { setLength(e.target.value); }}
            />
            <label>Length: {length}</label>
          </div>

          {/* Checkbox to allow numbers */}
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          {/* Checkbox to allow special characters */}
          <div className='flex items-center gap-x-1'>
            <input
              defaultChecked={charAllowed}
              type='checkbox'
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
