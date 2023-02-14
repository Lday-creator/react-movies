import { Component } from 'react';

class Search extends Component {
    state = {
        search: '',
        typeSearch: '',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.typeSearch);
        }
    };

    handleType = (event) => {
        this.setState(
            () => ({ [event.target.name]: event.target.value }),
            () => {
                this.props.searchMovies(this.state.search, this.state.typeSearch);
            }
        );
    };

    render() {
        const { typeSearch } = this.state;
        return (
            <div className='row'>
                <div className='input-field '>
                    <input
                        placeholder='search'
                        type='search'
                        className='validate'
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='waves-effect waves-light cyan btn search-btn'
                        onClick={() => this.props.searchMovies(this.state.search, this.state.typeSearch)}
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
                                onChange={this.handleType}
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
                                onChange={this.handleType}
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
                                onChange={this.handleType}
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
                                onChange={this.handleType}
                                checked={typeSearch === 'episode'}
                            />
                            <span>Episode</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
