import React from 'react';
import {Header, Button} from "semantic-ui-react";
import Logo from "../../Components/Logo/Logo";
import SearchInput from "../../Components/Search/Search";

const ButtonColor_1 = '#737aff';
const ButtonColor_2 = '#fb6c86';

const styles = {
    header: {
        margin: '60px 0 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    borders: {
        border: '1px solid red'
    },
    flex: {
        display: 'flex'
    },
    button_1: {
        borderRadius: 30,
        backgroundColor: ButtonColor_1,
        color: '#ffffff',
        margin: '0 20px 0 0',
        fontSize: 14,
        padding: '20px 30px'
    },
    button_2: {
        borderRadius: 30,
        backgroundColor: ButtonColor_2,
        color: '#ffffff',
        fontSize: 14,
        padding: '20px 30px'
    },
    searchDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

function Headers() {
    return (
        <Header style={styles.header}>
            <div style={styles.searchDiv}>
                <div style={{marginRight: 25}}>
                    <Logo/>
                </div>
                <div>
                    <SearchInput/>
                </div>
            </div>
            <div>
                <Button content='Start Mining' style={styles.button_1} size='big'/>
                <Button content='Download ZILMiner' style={styles.button_2} size='big'/>
            </div>
        </Header>
    )
}

export default Headers