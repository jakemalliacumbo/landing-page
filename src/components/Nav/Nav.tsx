import './Nav.css'
import { useState } from 'react';
import { TbMenu, TbX } from "react-icons/tb";

export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="logo">
                    <div className="badge"></div>
                    Bridge Collective
                </div>
                
                <button className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <TbX /> : <TbMenu />}
                </button>

                {isMenuOpen && (
                    <div className="menu">
                        <a href="#">About</a>
                        <a href="#">Our Work</a>
                        <a href="#">Partners</a>
                        <a href="#">Annual Report</a>
                        <a href="#">Donate</a>
                    </div>
                )}
            </header>

            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </>
    )
}