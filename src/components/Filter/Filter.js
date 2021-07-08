import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ value, onChangeFilter }) {
  return (
    <form>
      <label className={styles.label}>
        Filter contacts:{' '}
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={event => onChangeFilter(event.target.value)}
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
