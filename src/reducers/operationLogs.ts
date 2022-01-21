type ActionType = 'ADD_OPERATION_LOG' | 'DELETE_ALL_OPERATION_LOGS';

export type OperationLogAction = {
  type: ActionType;
  description?: string;
  operatedAt?: string;
};

export type OperationLogType = Omit<OperationLogAction, 'type'>;

const operationLogs = (
  state: OperationLogType[] = [],
  action: OperationLogAction,
) => {
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
