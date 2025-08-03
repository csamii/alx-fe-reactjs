import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import { Link } from "react-router"

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

            setLoading(true);
            setError(false);
            setUserData(null);
            try {
                const data = await fetchUserData(username);
                setUserData(data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
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

        {loading && <p>Loading...</p>}
        {error && (
            <p>Looks like we can't find the user</p>
        )}

        {userData && (
            <div>
                <img
                    src={userData.avatar_url}
                    alt={userData.login}
                />
                <h2>{userData.name || userData.login}</h2>
                <p>@{userData.login}</p>
                <Link to={userData.html_url} target="_blank">
                    View GitHub Profile
                </Link>
            </div>
        )}
    </div>
  )
}

export default Search