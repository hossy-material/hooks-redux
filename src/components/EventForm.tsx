import React, { useState } from 'react'

import { useAppContext } from '../contexts/AppContext'

export const EventForm = () => {
  const { state, dispatch } = useAppContext()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value)
  }

  const addEvent = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({type: 'CREATE_EVENT', title, body})
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = (e: React.MouseEvent) => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除してもよろしいですか？')
    result && dispatch({type: 'DELETE_ALL_EVENTS'})
  }

  const unCreatable = title === '' || body === ''

  const canDelete = state.length === 0
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={handleInputChange}/>
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディ</label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={handleTextAreaChange}/>
          <button className='btn btn-primary' onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
          <button className='btn btn-danger' onClick={deleteAllEvents} disabled={canDelete}>全てのイベントを削除する</button>
        </div>
      </form>
    </>
  )
}
