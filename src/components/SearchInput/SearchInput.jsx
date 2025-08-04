import { FaSearch } from 'react-icons/fa';
import './SearchInput.css'

export default function SearchInput({onChange,value,onKeyDown}){
    return (
        <div className="search-container">
            <FaSearch className='search-icon'/>
            <input type="text" className='search-input' 
                placeholder='Insira o nome da cidade...' 
                value = {value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />

        </div>
    )
}