import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { EventForm } from './EventForm';
import { Events } from './Events';
import { OperationLogs } from './OperationLogs';
import reducer from '../reducers';
import { AppStateType, SetAppContextProvider } from '../contexts/AppContext';

const APP_KEY = 'appWithRedux';

const App: React.VFC = () => {
  const appState = localStorage.getItem(APP_KEY);

  const initialState: AppStateType = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

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
