import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const CustomApp = () => {
  return (
    <h1>App bina import kiye</h1>
  )
}

const reactElement = {
  type: 'a',
  props: {
      href: 'https://www.google.com',
      target: '_blank',
      
  },
  children: 'Click me to go to Google'
}

// app parse hoga aur reactElement parse hoga
const anotherUser = 'Chaiwala'
const ReactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click me to go to Google',
  anotherUser

)

ReactDOM.createRoot(document.getElementById('root')).
render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  ReactElement
  
)
