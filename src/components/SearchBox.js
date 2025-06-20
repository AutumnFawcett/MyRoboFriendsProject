import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        style={{ backgroundColor: '#b279fc', color:  'black',  border: '5px solid black',  }}
        className='pa3 ba b--black'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
