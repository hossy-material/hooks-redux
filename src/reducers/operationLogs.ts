type ActionType = 'ADD_OPERATION_LOG' | 'DELETE_ALL_OPERATION_LOGS';

type Action = {
  type: ActionType;
  description?: string;
  operatedAt?: string;
};

export type OperationLogType = Omit<Action, 'type'>;

const operationLogs = (state: OperationLogType[] = [], action: Action) => {
  switch (action.type) {
    case 'ADD_OPERATION_LOG':
      const operationLog: OperationLogType = {
        description: action.description,
        operatedAt: action.operatedAt,
      };
      return [operationLog, ...state];
    case 'DELETE_ALL_OPERATION_LOGS':
      return [];
    default:
      return state;
  }
};

export default operationLogs;
