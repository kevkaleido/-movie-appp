import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-purple-600 p-5 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl">
        NewView
      </Link>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="search.."
          className="custom-placeholder p-1 w-full max-w-md rounded bg-white-100 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSearch}
          className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded"
        >
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
