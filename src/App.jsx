import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App({ appTitle, counterValue }) {
  const [counter, setCounter] = useState(counterValue);

  return (
    <>
      <header>
        <h1 className="app-title">{ appTitle }</h1>
      </header>
      <div>
        <p className="counter">{ counter }</p>
      </div>
      <div className="buttons-container">
        <button className="button" onClick={() => setCounter(() => counter + 1)}>
          +1
        </button>
        <button className="button" onClick={() => setCounter( counterValue )}>
          &#x27F3;
        </button>
        <button className="button" onClick={() => setCounter(() => counter - 1)}>
          -1
        </button>
      </div>
    </>
  );
}

App.propTypes = {
  appTitle: PropTypes.string.isRequired,
  counterValue: PropTypes.number
}

App.defaultProps = {
  counterValue: 0,
}

export default App;