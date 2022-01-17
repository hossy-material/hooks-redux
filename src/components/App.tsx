import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers';
import { Event } from './Event'
import { EventForm } from './EventForm'
import { Events } from './Events'

const App: React.VFC = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className='container-fluid'>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
