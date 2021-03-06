import './filter.css';
import { connect } from 'react-redux';
import { filter } from '../../redux/actions';

const Filter = ({ value, onChange }) => (
  <label className="filterLabel">
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.contactFilter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(filter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
