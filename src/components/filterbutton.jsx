import React from 'react';

const FilterButtons = ({ currentFilter, setFilter }) => {
  const filters = ['all', 'completed', 'incomplete'];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={filter === currentFilter ? 'active' : ''}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};


import React from 'react';

function FilterButtons() {
  return <h1>About Us</h1>;
}

export default FilterButtons;