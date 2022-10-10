import s from './Button.module.scss';

export const Button = ({ genre, margin }) => {
  return (
    <li className={s.genres__item}>
      <a href="#" className={s.genres__link}>
        {genre.title}
      </a>
    </li>
  );
};
