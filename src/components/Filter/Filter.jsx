import Input from '../Input';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contactsActions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import withScaleAnimation from '../../renderProp/withScaleAnimation';
import s from './Filter.module.scss';

function Filter() {
  const filter = useSelector(state => getFilter(state));
  const dispatch = useDispatch();
  const onChange = filter => dispatch(actions.filter(filter));

  return (
    <div className={s.container}>
      <Input
        label={'Find contacts by name'}
        name={'filter'}
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        autoComplete={'off'}
      ></Input>
    </div>
  );
}

export default withScaleAnimation(Filter);
