import React from 'react';

const SearchBox = ({searchChange}) => {
  return(
    <input type="search" placeholder="Search robots" onChange={searchChange} 
    className="pa3 ba b-green bg-light-blue "/>  
    )
}

export default SearchBox;