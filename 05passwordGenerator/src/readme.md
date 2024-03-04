useEffect:

=> useEffect is used for handling side effects in functional components. 
=> Side effects can include things like data fetching, subscriptions, manual DOM manipulations, or any action that occurs outside the typical rendering process.
=> It takes a function as its first argument, which will be executed after the component renders.
=> The second argument of useEffect is an array of dependencies. If any of the dependencies change between renders, the effect will re-run. If the dependencies array is empty, the effect runs only once after the initial render.


useCallback:

=> useCallback is used for memoizing functions to prevent unnecessary re-renders of child components that receive those functions as props.
=> It takes a function as its first argument and an array of dependencies as its second argument. The function is memoized, and the memoized version is returned. The memoized function will only change if one of the dependencies has changed, helping to avoid unnecessary re-creation of functions.
=> just like dp agar where map<dependencies, function> mp ; mp[dependencies] = function where dependencies is an array of useState() variables
=> agar dubara frontend par memorized dependencies wala input de diya user ne toh wo function re run ni hoga render se phle cache me phle se hi hoga (hamne store kar liya hai)

// explanation of App.jsx file:
    Import Statements:

         =>   The code imports necessary hooks (useState, useCallback, useEffect, useRef) from the 'react' library.
            State Variables:

         =>   State is managed using the useState hook for length (password length), numberAllowed (whether numbers are allowed), charAllowed (whether special characters are allowed), and password (generated password).
            useRef Hook:

         =>   The useRef hook is used to create a reference (passwordRef) for the input element that displays the generated password.
            passwordGenerator Function:

         =>   A useCallback memoized function (passwordGenerator) generates a password based on the current state variables (length, numberAllowed, charAllowed) and updates the password state.
            copyPasswordToClipboard Function:

         =>   Another useCallback memoized function (copyPasswordToClipboard) copies the generated password to the clipboard using the navigator.clipboard.writeText API.
            useEffect Hook:

         =>   The useEffect hook is used to call passwordGenerator whenever relevant state variables (length, numberAllowed, charAllowed) change. This ensures the password is generated when the component mounts and whenever there is a change in the input parameters.
            JSX:

        =>  The component renders a user interface with sliders, checkboxes, and buttons for interacting with the password generator. The generated password is displayed in an input element that can be copied to the clipboard. Styling is applied using Tailwind CSS classes.

onChange
   onChange={(e) => {
  setLength(e.target.value);
   }}
   (e) => {...}: This is an arrow function that takes an event object (e) as its parameter. The event object contains information about the event, including the new value of the input.

   setLength(e.target.value): This updates the length state variable with the new value of the input. The e.target.value represents the current value of the slider, and setLength is a function provided by the useState hook to update the state variable length.

   In summary, onChange is an event handler that gets triggered when the user interacts with the input element, allowing you to capture the new value and perform actions, such as updating state variables. In this case, it updates the length state variable when the user adjusts the slider.