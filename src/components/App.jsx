import { Profile } from "./Profile";
import user from '../data/user.json';

export const App = () => {
  return (
    <Profile userName={user.username} tag={user.tag} avatar={user.avatar} location={user.location} stats={user.stats}></Profile>
  );
};

