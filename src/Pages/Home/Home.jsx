import { CardVideo } from '../../components/CardVideo/CardVideo';

import s from './Home.module.scss';

export const Home = () => {
  return (
    <div>
      <h2>It's home</h2>
      <CardVideo />
      <CardVideo />
      <CardVideo />
      <CardVideo />
    </div>
  );
};
