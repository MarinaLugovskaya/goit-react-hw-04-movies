import React, { useState } from 'react';
import css from '../../components/SearchBar/SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [inSearch, setInSearch] = useState('');

  const handleFormSubmit = evt => {
    evt.preventDefault();
    onSubmit(inSearch);
    setInSearch('');
  };

  const handleChange = evt => setInSearch(evt.currentTarget.value);

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleFormSubmit} className={css.SearchForm}>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inSearch}
          onChange={handleChange}
        />

        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
}
