import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import statistics from '../data/statistics.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: 40,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
