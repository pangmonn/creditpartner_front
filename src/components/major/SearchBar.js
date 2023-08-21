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

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onSearchClick();
        }
    }

    const onResetClick = () => {
        setKeyword('');
        onSearch('');
    };

    return (
        <div className="searchBarContainer">
            <input
                type="text"
                placeholder="학과명 검색하기"
                value={keyword}
                onChange={onChange}
                onKeyPress={onKeyPress}
                className="searchInput"
            />
            <button onClick={onSearchClick}>검색</button>
            <button onClick={onResetClick}>검색어 초기화</button>
        </div>
    );
};

export default SearchBar;