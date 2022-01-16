import React from 'react'
import { Action, EventType } from '../reducers'

interface OwnProps {
  event: EventType
  dispatch: React.Dispatch<Action>
}

export const Event: React.VFC<OwnProps> = ({ event, dispatch }) => {
  const handleDeleteClick = (event: EventType) => () => {
    const result = window.confirm(`イベント(id=${event.id})を削除してもよろしいですか？`)
    result && dispatch({type: 'DELETE_EVENT', ...event})
  }

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type='button' className='btn btn-danger' onClick={handleDeleteClick(event)}>削除</button></td>
    </tr>
  )
}