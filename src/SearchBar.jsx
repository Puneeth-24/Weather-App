import React from 'react';
import searchIcon from "./images/search.png"
function SearchBar({city,setCity,handleSearch}){
    return(
        <div className="search-bar">
            <input
                type='text'
                placeholder='Enter City...'
                value={city}
                onChange={e=> setCity(e.target.value)}
                
                
            ></input>
            <button onClick={handleSearch}><img src={searchIcon} alt="" /></button>
        </div>
    );

}

export default SearchBar;