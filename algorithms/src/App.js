import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <fieldset>
            <div className='operation'>
              <label htmlFor='fibonacci'>Fibonacci: </label>
                <input type={'number'} id="fibonacci"/>
            </div>
            <h5> - </h5>
            <div className='operation'>
              <label htmlFor='triangular'>2Triangular: </label>
                <input type={'number'} id="triangular"/>
            </div>
            <h5> + </h5>
            <div className='operation'>
              <label htmlFor='primo'>Primo: </label>
                <input type={'number'} id="primo"/>
            </div>
          </fieldset>
          <h5> = </h5>
          <fieldset>
            <div className='operation'>
              <label htmlFor='result'>Resultado: </label>
              <input type={'number'} id="result" />
            </div>
          </fieldset>
        </form>
      </header>
    </div>
  );
}

export default App;
