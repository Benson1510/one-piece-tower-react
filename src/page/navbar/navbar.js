import React from "react";
import { Link } from "react-scroll";

const NavItems = [
    { id: 'HautDePage', label: <img src="./img/tokyo-tower.png" alt="" width="50" height="50" /> },
    { id: 'reservation', label: 'Réservation' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row" id="menu">
                {NavItems.map(({ id, label }) => (
                    <div className="col" key={id}>
                        <Link
                            to={id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            {label}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;