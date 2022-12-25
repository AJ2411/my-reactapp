import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="row navbar">
            <div className="col-sm-12 text-sm-end">
                <NavLink className="navlinks" activeClassName exact = "true" to="/"> Home </NavLink>
                       
           <NavLink className="navlinks" activeClassName to="/event-handlers"> Directory </NavLink>
           <NavLink className="navlinks" activeClassName to="/form-validation"> Sign In </NavLink>
            </div>
        </div>
    );
}

export default Navigation;