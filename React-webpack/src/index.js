import React from 'react'
import { createRoot } from 'react-dom/client'
//import { hot } from 'react-hot-loader/root' // Change to "Fast Refresh" https://www.npmjs.com/package/react-hot-loader
import App from './App'
import './css/index.css'

const root = createRoot(document.getElementById('root'))

root.render(<App />)
//root.render(hot(App)) // Just for myself (as a reminder)