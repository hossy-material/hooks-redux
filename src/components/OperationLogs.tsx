import { OperationLog } from './OperationLog';
import { useAppContext } from '../contexts/AppContext';

export const OperationLogs = () => {
  const { state } = useAppContext();
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog, index) => (
            <OperationLog key={index} operationLog={operationLog} />
          ))}
        </tbody>
      </table>
    </>
  );
};
