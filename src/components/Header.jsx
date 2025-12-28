import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header style={{
            backgroundColor: 'var(--color-secondary)',
            color: 'var(--color-primary)',
            padding: '1rem 0',
            position: 'relative',
            zIndex: 1001
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Vidreres Tourism</h1>

                <nav>
                    <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-white)', textDecoration: 'none' }}>Home</Link></li>
                        <li><Link to="/calendar" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-white)', textDecoration: 'none' }}>Calendar</Link></li>
                        <li><Link to="/activities" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-white)', textDecoration: 'none' }}>Activities</Link></li>
                        <li><Link to="/selection" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>My Selection</Link></li>
                    </ul>
                </nav>

                <button className="nav-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
};

export default Header;
