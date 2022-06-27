import React, { useRef, useEffect } from 'react';
import CustomInputGroup from '../CustomInputGroup';

const SearchBar = ({ OnClickSearch, searchValue }) => {
    const refSearch = useRef(null);

    const handleClick = (e) => {
        if (refSearch && refSearch.current)
            OnClickSearch(refSearch.current.value);
    };

    const handleInputKeyUp = (e) => {
        if (e.code === 'Enter') {
            if (refSearch && refSearch.current) {
                OnClickSearch(refSearch.current.value);
                e.preventDefault();
            }
        }
    }

    useEffect(() => {
        if (refSearch && refSearch.current)
            refSearch.current.value = searchValue;
    }, [searchValue])

    return (
        <CustomInputGroup
            ref={refSearch}
            OnInputKeyUp={handleInputKeyUp}
            OnHandleClick={handleClick}
        />
    );
};

export default SearchBar;