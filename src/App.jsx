import React, { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  calculateResult,
  memoryAdd,
  memoryRecall,
  memoryClear
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumber = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperation = (operation) => {
    dispatch(changeOperation(operation));
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  const handleEquals = () => {
    dispatch(calculateResult());
  };

  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  };

  const handleMemoryRecall = () => {
    dispatch(memoryRecall());
  };

  const handleMemoryClear = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={handleMemoryAdd} />
              <CalcButton value={'MR'} onClick={handleMemoryRecall} />
              <CalcButton value={'MC'} onClick={handleMemoryClear} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={() => handleNumber(1)} />
              <CalcButton value={2} onClick={() => handleNumber(2)} />
              <CalcButton value={3} onClick={() => handleNumber(3)} />
            </div>
            <div className="row">
              <CalcButton value={4} onClick={() => handleNumber(4)} />
              <CalcButton value={5} onClick={() => handleNumber(5)} />
              <CalcButton value={6} onClick={() => handleNumber(6)} />
            </div>
            <div className="row">
              <CalcButton value={7} onClick={() => handleNumber(7)} />
              <CalcButton value={8} onClick={() => handleNumber(8)} />
              <CalcButton value={9} onClick={() => handleNumber(9)} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={() => handleOperation('+')} />
              <CalcButton value={0} onClick={() => handleNumber(0)} />
              <CalcButton value={'-'} onClick={() => handleOperation('-')} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={() => handleOperation('*')} />
              <CalcButton value={'/'} onClick={() => handleOperation('/')} />
              <CalcButton value={'CE'} onClick={handleClear} />
            </div>
            <div className="row eq_button">
              <CalcButton value={'='} onClick={handleEquals} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;