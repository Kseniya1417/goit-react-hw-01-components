import { Profile } from './Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(192, 192, 192)',
        height: '100%',
        paddingBottom: 20,
      }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      ></Profile>
      <Statistics stats={data} title="Upload stats"></Statistics>
      <Statistics stats={data}></Statistics>
    </div>
  );
};
