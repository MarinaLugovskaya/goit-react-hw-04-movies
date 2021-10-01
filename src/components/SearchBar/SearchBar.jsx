import React, { useState } from 'react';
// import css from '../Searchbar/Searchbar.module.css';

export default function SearchBar({ onSubmit }) {
  const [inSearch, setInSearch] = useState('');

  const handleFormSubmit = evt => {
    evt.preventDefault();
    onSubmit(inSearch);
    setInSearch('');
  };

  const handleChange = evt => setInSearch(evt.currentTarget.value);

  return (
    <header>
      <form onSubmit={handleFormSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inSearch}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
