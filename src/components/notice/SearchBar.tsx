import React from 'react';
import SearchIcon from '../icons/searchIcon'; // 아이콘 불러오기

const SearchBar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        style={{
          padding: '8px',
          fontSize: '14px',
          flex: 1,
        }}
      />
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;