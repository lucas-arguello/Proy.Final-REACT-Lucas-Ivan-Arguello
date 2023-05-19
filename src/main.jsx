import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirebase } from './Firebase/config'

//import './index.css'

initFirebase ()

//Aca esta ingresando un DIV en el HTML --> ROOT
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
