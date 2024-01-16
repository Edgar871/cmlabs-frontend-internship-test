import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/mealsActions';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useMealContext();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    const term = e.target.value.trim();
    setSearchTerm(term);
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
  }

  return (
    <form className='search-form' onSubmit={handleSearchResult}>
      <input
        type="text"
        className='form-control-input text-dark-gray fs-15'
        placeholder='Search recipes here ...'
        onChange={handleSearchTerm}
      />
      <button type="submit" className='form-submit-btn text-white text-uppercase fs-14'>
        <BsSearch className='btn-icon' size={20} />
      </button>
    </form>
  );
}

export default SearchForm;
