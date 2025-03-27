import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                {/* Logo à gauche */}
                <Link to="HautDePage" className="navbar-brand">
                    <img  src="./img/tokyo-tower.png"  alt="Logo"  width="30"  height="30" />
                </Link>
                
                {/* Conteneur flex pour centrer */}
                <div className="d-flex flex-grow-1 justify-content-center">
                    <Link to="reservation" className="nav-link" >
                        Réservation
                    </Link>
                </div>
                
                {/* Contact à droite */}
                <Link to="contact" className="nav-link">
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;