import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/services" style={styles.link}>Services</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: "#333",
        padding: "1rem",
        display: "flex",
        gap: "1.5rem"
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1.1rem"
    }
};

export default Navbar;