import s from './Genre.module.scss';
import { Button } from '../UI/Button/Button';

export const Genre = ({ genre }) => {
  return (
    <Button genre={genre} margin={10}>
      {genre.title}
    </Button>
  );
};
