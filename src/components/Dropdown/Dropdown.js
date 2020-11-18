import React from 'react';
import './Dropdown.css'

function Dropdown() {
    return (
        <div className="dropdown">
            <label htmlFor="dropdown">Browse</label>
            <select style={{width:'20px'}} name="browse" id="dropdown">
                <option value="home">Home</option>
                <option value="Series">Series</option>
                <option value="Films">Films</option>
                <option value="New and Popular">New and Popular</option>
                <option value="My List">My List</option>
            </select>

        </div>
    )
}

export default Dropdown
