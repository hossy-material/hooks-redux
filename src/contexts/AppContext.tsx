import React from 'react';
import { CombinedState } from 'redux';
import { EventAction, EventType } from '../reducers/events';
import {
  OperationLogType,
  OperationLogAction,
} from '../reducers/operationLogs';

export type AppStateType = {
  events: EventType[];
  operationLogs: OperationLogType[];
};

type AppContextType = {
  state: CombinedState<{
    events: EventType[];
    operationLogs: OperationLogType[];
  }>;
  dispatch: React.Dispatch<EventAction | OperationLogAction>;
};

function createCtx<T>() {
  const ctx = React.createContext<T | undefined>(undefined);

  function useCtx() {
    const _ctx = React.useContext(ctx);

    if (!_ctx) throw new Error('useCtx must be inside a Provider with a value');

    return _ctx;
  }

  return [useCtx, ctx.Provider] as const;
}

export const [useAppContext, SetAppContextProvider] =
  createCtx<AppContextType>();
