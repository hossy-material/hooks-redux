import React from 'react';

import { OperationLogType } from '../reducers/operationLogs';

interface OwnProps {
  operationLog: OperationLogType;
}

export const OperationLog: React.VFC<OwnProps> = ({ operationLog }) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  );
};
