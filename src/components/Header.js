import React from 'react'

function Header({className, dark, children}) {
    dark = dark?"dark":"light";
    return (
        <nav className={`navbar navbar-${dark} bg-${dark}` + (className?" " +className:"")}>
            <span className="navbar-brand">{children}</span>
        </nav>
    )
}

export default Header
