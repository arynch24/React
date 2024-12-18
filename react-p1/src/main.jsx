import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}
//created our own component with our format
//which will only work in our custom render function made by us in CustomReact folder where we created our own kinda react library

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

/*
src: https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js
export function createElement(type, config, children) {}
*/

//A react component is made in this format only 
//this is in react format created by me which can be rendered using line 43 render method
const reactElement = React.createElement(
    'a',//type
    {href: 'https://google.com',target: '_blank' },//config
    'click me to visit google',//children
    anotherElement//must be an evaluated expression //children
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement

  //or
 
  // <>
  // <App/>
  // </>

  //or

  // App()
)

