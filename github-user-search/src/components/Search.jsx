import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import { Link } from "react-router"

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!username.trim()) return;
        setLoading(true);
        setError("");
        setUserData(null);
        try {
            const data = await fetchUserData(username);
            console.log(data)
            setUserData(data || []);
        } catch (err) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">GitHub Username</label>
            <input
            type="text"
            value={username}
            placeholder="Enter GitHub username"
            onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>

        {loading && <p>Loading...</p>}
        <p>{error}</p>

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