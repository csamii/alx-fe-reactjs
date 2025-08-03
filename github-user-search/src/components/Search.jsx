import { useState } from "react";

const Search = () => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim()) return;
        console.log(`Searching for: ${username}`);
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="username">GitHub Username</label>
        <input
          type="text"
          value={username}
          placeholder="Enter GitHub username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search