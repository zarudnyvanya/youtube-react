import { Button } from './../UI/Button/Button';

import s from './Genre.module.scss';

export const Genre = () => {
  return (
    <div>
      <ul className={s.list}>
        <Button>{1}</Button>
        <Button>{2}</Button>
        <Button>{3}</Button>
      </ul>
    </div>
  );
};
