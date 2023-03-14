import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filrter-slice';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const changeFilter = ({ target }) => {
    const action = setFilter(target.value);
    dispatch(action);
  };

  return (
    <div className={css.filterLabel}>
      <label>
        Find contact by name
        <input
          className={css.filterInput}
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};



export default Filter;
