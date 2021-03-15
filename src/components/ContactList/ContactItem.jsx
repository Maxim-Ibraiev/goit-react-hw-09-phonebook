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
            <ButtonDelete onClick={() => onDeleteContacts(id)}>X</ButtonDelete>
          </li>
        </>
      }
    </>
  );
}

export default withTransitionLeftAnimation(ContactItem);

ContactItem.propTypes = {
  contact: PropTypes.object,
  onDeleteContacts: PropTypes.func,
};
