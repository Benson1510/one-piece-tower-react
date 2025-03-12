import React from "react";
import { Link } from "react-scroll";

const NavItems = [  
    { id: 'HautDePage', label: <img src="./img/tokyo-tower.png" alt="" width="50" height="50" /> },
    { id: 'reservation', label: 'Réservation' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.menu}>
               {NavItems.map(({ id, label }) => (
                    <li key={id} 
                        style={styles.menuItem}>
                        <Link
                            to={id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            {label}
                        </Link>  
                    </li>
               ))}
            </ul>
        </nav>    
    );   
}

const styles = {
    navbar: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#d3d3d3',
        padding: '10px 20px',
        zIndex: 0,
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderRadius: '40px',
        top: 10,
        bottom: 10,
    },
    logo: {
        position: 'absolute',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)', 
    },
    menu: {
        display: 'flex', 
        gap: '590px', 
    },
    menuItem: {
        fontSize: '18px',
        color: '#dc143c',
        textDecoration: 'none',
        listStyleType: 'none',
        fontFamily: 'cursive',
    },
    reservation: {
        marginTop: '15px', 
    },
    contact: {
        marginTop: '15px', 
    },
};

export default Navbar;
