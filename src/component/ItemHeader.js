import React from 'react';
import { Link, Route } from 'react-router-dom';

class ItemHeader extends React.Component {

    render() {
        return (
            <Route exact={this.props.activeOnlyWhenExact} path={this.props.to} children={({ match }) => {
                
                let active = match? 'active' : '';
                
                return (
                    <li className={`nav-item ${active}`}>
                        <Link className="nav-link" to={this.props.to}>{this.props.title}</Link>
                    </li>
                );
            }} />
        );
    }
}

export default ItemHeader;