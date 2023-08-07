import React from 'react';
import './styles/index.scss';
import { AppUI } from './containers/UI';
import { TodoProvider } from './context';

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App;
