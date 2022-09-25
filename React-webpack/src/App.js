import React from 'react'
import reactLogo from './assets/images/react-logo.svg'
import webpackLogo from './assets/images/webpack-logo.svg'
import './css/App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={reactLogo} className='App-logo' alt='React logo' />
        <div className='decorative-letter'>X</div>
        <img src={webpackLogo} className='App-logo' alt='Webpack logo' />
      </div>

      <h3>Seems like everything is working as intended!</h3>

      <p>Light reading for development</p>
      <ul>
        <li>
          <a href='https://reactjs.org/docs/getting-started.html'>React documentation</a>
        </li>
        <li>
          <a href='https://webpack.js.org/concepts/'>Webpack documentation</a>
        </li>
      </ul>

    </div>
  )
}

export default App