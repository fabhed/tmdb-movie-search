import React, { useState } from 'react';
import axios from 'axios';

function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async (e) => {
    e.preventDefault();
    const response = await axios.get(`/search?q=${query}`);
    setResults(response.data);
  };

  return (
    <div>
      <form onSubmit={search}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {results.map((result) => (
        <div key={result.id}>{result.name}</div>
      ))}
    </div>
  );
}

export default SearchBox;
