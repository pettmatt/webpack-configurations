import reactLogo from './assets/react-logo.svg'
import webpackLogo from './assets/webpack-logo.svg'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <img src={reactLogo} className='App-logo' alt='logo' />
        <div className='decorative-letter'>X</div>
        <img src={webpackLogo} className='App-logo' alt='logo' />
      </div>

      <h3>Seems like everything is working as intended!</h3>

      <p>Light reading for development:</p>
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