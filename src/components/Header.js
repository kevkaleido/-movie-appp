import React, { useState } from 'react';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <header className="bg-blue-600 p-4 text-white">
      <h1 className="text-2xl">Movie App</h1>
      <input
        type="text"
        placeholder="Search..."
        className="custom-placeholder mt-2 p-2 w-full max-w-md rounded bg-blue-500 text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearch}
      />
    </header>
  );
}

export default Header;
