import PropTypes from 'prop-types';
import ButtonDelete from '../Buttons/ButtonDelete';
import s from './ContactItem.module.scss';
import withTransitionLeftAnimation from '../../renderProp/withTransitionLeftAnimation';

function ContactItem({ contact, onDeleteContacts }) {
  const { id, name, number } = contact;

  return (
    <>
      {
        <>
          <li className={s.item}>
            {`${name}: ${number}`}
            <ButtonDelete onClick={() => onDeleteContacts(id)} />
          </li>
        </>
      }
    </>
  );
}

export default withTransitionLeftAnimation(ContactItem);

ContactItem.propTypes = {
  contact: PropTypes.object,
  filter: PropTypes.string,
  onDeleteContacts: PropTypes.func,
};
