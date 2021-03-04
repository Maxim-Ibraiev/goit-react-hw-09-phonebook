import PropTypes from 'prop-types';
import Input from '../Input';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contactsActions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import withScaleAnimation from '../../renderProp/withScaleAnimation';
import s from './Filter.module.scss';

function Filter({ filter, onChange }) {
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

const mapStateToProps = (state, props) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = {
  onChange: actions.filter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withScaleAnimation(Filter));

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
