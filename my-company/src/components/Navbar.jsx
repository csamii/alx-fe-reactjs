import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ 
            backgroundColor: "#333",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem"
        }}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/services" style={styles.link}>Services</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
    );
};

const styles = {
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1.1rem"
    }
};

export default Navbar;