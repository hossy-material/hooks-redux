import React from 'react'
import { Action, EventType } from '../reducers'

type AppContextType = {
  state: EventType[]
  dispatch: React.Dispatch<Action>
}

function createCtx<T>() {
  const ctx = React.createContext<T | undefined>(undefined)

  function useCtx() {
    const _ctx = React.useContext(ctx)
    
    if (!_ctx)
      throw new Error('useCtx must be inside a Provider with a value')

    return _ctx
  }

  return [useCtx, ctx.Provider] as const
}

export const [useAppContext, SetAppContextProvider] = createCtx<AppContextType>()