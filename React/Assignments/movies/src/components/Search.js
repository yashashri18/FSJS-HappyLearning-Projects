import React, {useState} from 'react'
import './Search.css'

function Search(props) {
    const [searchValue, setSearchValue] = useState('');
    
    const onChangeHandler = (e) => {
        setSearchValue(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.search(searchValue)
        setSearchValue('')
    }
  return (
    <form className='search'>
      <input 
        type="text" 
        value={searchValue} 
        onChange={onChangeHandler} />
      <input 
        type="submit" 
        onClick={onSubmitHandler} />
    </form>
  )
}

export default Search
