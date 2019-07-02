import React from 'react';
import {Image} from 'semantic-ui-react';
import Logo_header from '../../../src/Assets/Image/logo.png';
import {NavLink} from "react-router-dom";

function Logo() {
    return (
        <div>
            <NavLink to="/"><Image src={Logo_header}/></NavLink>
        </div>
    )
}

export default Logo