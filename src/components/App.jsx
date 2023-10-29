import { GlobalStyle } from 'components/GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistic';
import user from '../data/user.json';
import statistic from '../data/data.json';
import friends from '../data/friends.json';
import { FriendsList } from './Friends/FriendsList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statistic} />

      <FriendsList friends={friends} />

      <GlobalStyle />
    </div>
  );
};
