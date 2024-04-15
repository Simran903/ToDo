import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' // Importing Provider from react-redux for providing the Redux store
import { store } from './store/store.js' // Importing the Redux store


ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the root component with the Provider to provide access to the Redux store
  <Provider store={store}>
    <App />
  </Provider>,
)
