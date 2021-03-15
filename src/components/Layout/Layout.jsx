import s from './Layout.module.scss';

export default function Layout({ children }) {
  return <div className={s.container}>{children}</div>;
}
