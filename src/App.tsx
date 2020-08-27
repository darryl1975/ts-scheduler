import React from 'react';
// import logo from './logo.svg';
import './App.css';

import AppScheduler from './AppScheduler';

// References 
// https://stephenchou1017.github.io/scheduler/#/views
// https://github.com/StephenChou1017/react-big-scheduler/blob/master/example/Basic.js
// https://react-dnd.github.io/react-dnd/docs/api/dnd-provider
// https://codesandbox.io/s/interesting-dawn-ih3bo?file=/src/index.js
// 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <AppScheduler />
    </div>
  );
}

export default App;
