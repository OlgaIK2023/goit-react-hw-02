import FriendList from "./components/FriendList/FriendList.jsx";
import Profile from "./components/Profile/Profile.jsx";
import TransactionsHistory from "./components/TransactionsHistory/TransactionsHistory.jsx";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

//APP code below

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionsHistory items={transactions} />
    </>
  );
};

export default App;
