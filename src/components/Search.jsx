import { useEffect, useState } from 'react';

function Search({ searchMovies }) {
    const [search, setSearch] = useState('matrix');
    const [typeSearch, setTypeSearch] = useState('');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, typeSearch);
        }
    };

    const handleType = (event) => {
        setTypeSearch(event.target.value);
    };

    useEffect(() => {
        searchMovies(search, typeSearch);
    }, [typeSearch]);

    return (
        <div className='row'>
            <div className='input-field '>
                <input
                    placeholder='search'
                    type='search'
                    className='validate'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className='waves-effect waves-light cyan btn search-btn'
                    onClick={() => searchMovies(search, typeSearch)}
                >
                    Search
                </button>
                <div className='search-type'>
                    <label>
                        <input
                            className='with-gap'
                            name='typeSearch'
                            type='radio'
                            value=''
                            onChange={handleType}
                            checked={typeSearch === ''}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='typeSearch'
                            type='radio'
                            value='movie'
                            onChange={handleType}
                            checked={typeSearch === 'movie'}
                        />
                        <span>Movie</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='typeSearch'
                            type='radio'
                            value='series'
                            onChange={handleType}
                            checked={typeSearch === 'series'}
                        />
                        <span>Series</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='typeSearch'
                            type='radio'
                            value='episode'
                            onChange={handleType}
                            checked={typeSearch === 'episode'}
                        />
                        <span>Episode</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export { Search };
