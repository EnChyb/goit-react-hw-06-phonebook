import PropTypes from 'prop-types'; 
import css from './Filter.module.css'

export const Filter = ({ filter, setFilter }) =>{

    return (
        <div className={css.filter}>
        <label className={css.label}>Find contacts by name:
            <input className={css.input}
                value={filter}
                type='text'
                name="filter"
                placeholder='Search contact...'
                onChange={e => setFilter(e.target.value)}
            />
        </label>
        </div>

    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
}