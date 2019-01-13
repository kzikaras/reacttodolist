import React from 'react'
import { Link } from 'react-router-dom';
// Link allows us to link from one page to another as seen on line 8 below
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
