import React, { useState } from 'react';

import { useAppContext } from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

export const EventForm = () => {
  const { state, dispatch } = useAppContext();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const addEvent = (e: React.MouseEvent) => {
    e.preventDefault();

    dispatch({ type: 'CREATE_EVENT', title, body });

    dispatch({
      type: 'ADD_OPERATION_LOG',
      description: 'イベントを作成しました',
      operatedAt: timeCurrentIso8601(),
    });

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e: React.MouseEvent) => {
    e.preventDefault();
    const result = window.confirm(
      '全てのイベントを本当に削除してもよろしいですか？',
    );
    if (result) {
      dispatch({ type: 'DELETE_ALL_EVENTS' });
      dispatch({
        type: 'ADD_OPERATION_LOG',
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const deleteAllOperationLogs = (e: React.MouseEvent) => {
    e.preventDefault();

    const result = window.confirm(
      '全ての操作ログを本当に削除してもよろしいですか？',
    );

    if (result) {
      dispatch({ type: 'DELETE_ALL_OPERATION_LOGS' });
    }
  };

  const unCreatable = title === '' || body === '';

  const canDelete = state.events.length === 0;

  const canDeleteAllOperationLogs = state.operationLogs.length === 0;

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={handleTextAreaChange}
          />
          <button
            className="btn btn-primary"
            onClick={addEvent}
            disabled={unCreatable}
          >
            イベントを作成する
          </button>
          <button
            className="btn btn-danger"
            onClick={deleteAllEvents}
            disabled={canDelete}
          >
            全てのイベントを削除する
          </button>
          <button
            className="btn btn-danger"
            onClick={deleteAllOperationLogs}
            disabled={canDeleteAllOperationLogs}
          >
            全ての操作ログを削除する
          </button>
        </div>
      </form>
    </>
  );
};
