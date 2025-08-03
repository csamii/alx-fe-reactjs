import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import { Link } from "react-router"

function Search() {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError("");
        try {
            const data = await fetchUserData(username, location, minRepos);
            setUsers(data.items || []);
            if ((data.items || []).length === 0) {
                setError("Looks like we can't find any matching users.");
            }
        } catch (err) {
            setError("Something went wrong while fetching users.");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="max-w-3xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 border rounded w-full"
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="p-2 border rounded w-full"
            />
            <input
                type="number"
                placeholder="Minimum Repositories"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                className="p-2 border rounded w-full"
            />
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
            Search
            </button>
        </form>

        <div className="mt-6">
            {loading && <p>Loading...</p>}
            <p className="text-red-500">{error}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {users.map((user) => (
                    <div key={user.id} className="border p-4 rounded shadow">
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-16 h-16 rounded-full mb-2"
                    />
                    <h2 className="font-bold">{user.login}</h2>
                    <Link to={user.html_url} target="_blank">
                        View GitHub Profile
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Search;

{/*import { useState } from "react";
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
                onChange={(event) => setUsername(event.target.value)}
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

export default Search */}