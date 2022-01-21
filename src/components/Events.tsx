import { Event } from './Event';
import { useAppContext } from '../contexts/AppContext';

export const Events = () => {
  const { state } = useAppContext();

  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};
