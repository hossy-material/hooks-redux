import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { EventForm } from './EventForm';
import { Events } from './Events';
import reducer from '../reducers';
import { SetAppContextProvider } from '../contexts/AppContext';

const App: React.VFC = () => {
  const initialState = {
    events: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SetAppContextProvider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </SetAppContextProvider>
  );
};

export default App;
