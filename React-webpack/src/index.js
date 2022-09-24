import React from 'react'
import { hot } from 'react-hot-loader/root'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const render = (App) => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render(hot(App))