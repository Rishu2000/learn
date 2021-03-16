import React from 'react'

function Header({className, dark, children}) {      //Passed argument 'children' 
    dark = dark?"dark":"light";
    return (
        <nav className={`navbar navbar-${dark} bg-${dark}` + (className?" " +className:"")}>
            <span>{children}</span>
        </nav>
    )
}

export default Header
