import React from 'react';

import { EventType } from '../reducers/events';
import { useAppContext } from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

interface OwnProps {
  event: EventType;
}

export const Event: React.VFC<OwnProps> = ({ event }) => {
  const { dispatch } = useAppContext();

  const handleDeleteClick = (event: EventType) => () => {
    const result = window.confirm(
      `イベント(id=${event.id})を削除してもよろしいですか？`,
    );

    if (result) {
      dispatch({ type: 'DELETE_EVENT', ...event });

      dispatch({
        type: 'ADD_OPERATION_LOG',
        description: `イベント(id=${event.id})を削除しました。`,
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDeleteClick(event)}
        >
          削除
        </button>
      </td>
    </tr>
  );
};
