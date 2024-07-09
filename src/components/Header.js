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
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl">
        NewView
      </Link>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="custom-placeholder p-2 w-full max-w-md rounded bg-blue-500 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded"
        >
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
