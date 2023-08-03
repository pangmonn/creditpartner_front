import React, { useState } from "react";
import "./styles/searchbar.css"

const SearchBar = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');

    const onChange = (e) => {
        setKeyword(e.target.value);
    };

    const onSearchClick = () => {
        onSearch(keyword);
    };

    const onResetClick = () => {
        setKeyword('');
        onSearch(''); // Optionally, you can trigger a search with an empty keyword to reset the search results.
    };

    return (
        <div className="searchBarContainer">
            <input
                type="text"
                placeholder="학과명 검색하기"
                value={keyword}
                onChange={onChange}
                className="searchInput"
            />
            <button onClick={onSearchClick}>검색</button>
            <button onClick={onResetClick}>검색어 초기화</button>
        </div>
    );
};

export default SearchBar;