import logo from './logo.svg';
import './App.css';
import Form from './Form/Form';
import Result from './Result/Result'
import {Algorithm} from './Operations/Algorithm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <div className='algorithm'>
          <Form/>
          <h5> = </h5>
          <Result/>
          <Algorithm/>
        </div> 
      </header>
    </div>
  );
}

export default App;
