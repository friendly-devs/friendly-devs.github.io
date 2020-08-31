import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import ItemHeader from './ItemHeader';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">React web</Link>

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <ItemHeader to="/" activeOnlyWhenExact={true} title="Home"/>
                        <ItemHeader to="/about" title="About"/>
                        <ItemHeader to="/contact" title="Contact"/>
                    </ul>
                </div>

                <Search/>
            </nav>
        );
    }
}

export default Header;