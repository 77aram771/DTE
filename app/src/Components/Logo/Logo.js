import React from 'react';
import { Image } from 'semantic-ui-react';
import Logo_header from '../../../src/Assets/Image/logo.png';

const styles = {
    borders: {
        border: '1px solid red'
    }
};

function Logo() {
    return(
        <div style={styles.borders}>
            <Image src={Logo_header}/>
        </div>
    )
}

export default Logo