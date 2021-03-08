import React, { useState }from 'react'
import { BiSearch } from "react-icons/bi";
import './SearchBar.css';


const SearchBar = () => {

    const [term, setTerm] = useState('')
   
    
    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onFormSubmit} className="form-container" >
            <input  
                value={term}
                onChange={e=> setTerm(e.target.value)}
                className="search-field" 
                type="text" 
                placeholder="Search for a character" 
                name="search" 
            />
            <button className="search-button" type="submit"><BiSearch className='search-icon'/></button>
        </form>
    )
}

export default SearchBar
