import logo from './logo.svg';
import './App.css';
import Form from './Form/Form';
import { Result, Operation, Fibonacci } from './Result/Result';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <div className='algorithm'>
          <Form />
          <h5>=</h5>
          <Operation />
          <Fibonacci/>
          <h5>=</h5>
          <Result/>
        </div> 
      </header>
    </div>
  );
}

export default App;
