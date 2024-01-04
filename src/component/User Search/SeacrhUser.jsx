import React, { useState } from 'react'
import './SearchUser.css'

const API_URL = "https://api.github.com";

async function fetchResults(query) {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      return json.items || [];
    } catch (e) {
      throw new Error(e);
    }
  }

const SeacrhUser = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    function onSearchChange(event) {
        setQuery(event.target.value);
    }

    async function onSearchSubmit(event) {
        event.preventDefault();
        const result = await fetchResults(query);
        setResults(result)
        console.log(result);
    }

    
    return (
        <div className="app">
            <main className="main">
                <h2>Github User Search</h2>
                <Form
                    onSubmit={onSearchSubmit}
                    onChange={onSearchChange}
                    value={query}
                />

                <h3>Results</h3>
                <div id="results">
                    <div>
                        {results && results.map((user) => (
                            <User
                                key={user.login}
                                avatar={user.avatar_url}
                                url={user.html_url}
                                username={user.login}
                            />
                            
                            
                        ))}

                        
                    </div>
                </div>
            </main>
        </div>
    )
}

function User({ avatar, url, username }) {
    return (
        <div className="user">
            <img src={avatar} alt="Profile" width="50" height="50" />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {username}
                
            </a>
        </div>
    );
}

function Form({ onSubmit, value, onChange }) {
    return (
        <form action="" className="search-form" 
        onSubmit={onSubmit} >
            <input
                id="search"
                type="text"
                placeholder='Enter user or email'
                onChange={onChange}
                value={value}
            />
            <button type='submit' >Search</button>
        </form>
    );

}

export default SeacrhUser