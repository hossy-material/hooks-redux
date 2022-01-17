import React from 'react'

import { Event } from './Event'
import { EventType, Action } from '../reducers';

interface OwnProps {
  state: EventType[]
  dispatch: React.Dispatch<Action>
}

export const Events: React.VFC<OwnProps> = ({ state, dispatch }) => {
  return(
    <>
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
    </>
  )
}