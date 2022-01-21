import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { EventForm } from './EventForm';
import { Events } from './Events';
import { OperationLogs } from './OperationLogs';
import reducer from '../reducers';
import { AppStateType, SetAppContextProvider } from '../contexts/AppContext';

const App: React.VFC = () => {
  const initialState: AppStateType = {
    events: [],
    operationLogs: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SetAppContextProvider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </SetAppContextProvider>
  );
};

export default App;
