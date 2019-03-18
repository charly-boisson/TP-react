import React from "react";
import './Search.css';

const Search = ({ className, value, onChange, children }) =>
  <form>
    {children}
    <input className={className} type="text" value={value} onChange={onChange} />
  </form>

export default Search;
