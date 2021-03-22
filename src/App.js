import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transaction.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/*<Statistics stats = {statisticalData} />*/}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
