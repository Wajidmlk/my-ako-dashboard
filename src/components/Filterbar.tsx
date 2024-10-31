// FilterBar.tsx
import React from 'react';
import '../styles/FilterBar.scss';

type props = {invertData: boolean, setInvertData: React.Dispatch<React.SetStateAction<boolean>>}

const FilterBar: React.FC<props> = ({ invertData, setInvertData }) => {
  return (
    <div className="filter-bar">
      <select>
        <option>Region</option>
      </select>
      <select>
        <option>Organization</option>
      </select>
      <select>
        <option>Role</option>
      </select>
      <select>
        <option>Site</option>
      </select>
      {/*<button onClick={() => setInvertData(prev => !prev)} className="compliance-toggle">
        {invertData ? 'Most Compliant' : 'Least Compliant'}
      </button>*/}
      <button>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
