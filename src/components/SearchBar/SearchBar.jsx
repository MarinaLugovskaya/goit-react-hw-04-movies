import React, { useState } from 'react';

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
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inSearch}
          onChange={handleChange}
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
}
