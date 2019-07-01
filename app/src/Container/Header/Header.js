import React from 'react';
import {Header, Button, Image} from "semantic-ui-react";

import SearchInput from "../../Components/Search/Search";
import Title from "../../Components/Title/Title";
import Text from "../../Components/Text/Text";
import Logo from "../../Components/Logo/Logo";

import headerImage from '../../Assets/Image/header_image.png'

const ButtonColor_1 = '#737aff';
const ButtonColor_2 = '#fb6c86';

const styles = {
    header: {
        margin: '60px 0 100px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    },
    nav: {
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    },
    titleDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

};

function Headers() {
    return (
        <Header style={styles.header}>
            <div style={{width: 100 + '%', display: 'flex', justifyContent: 'space-between'}}>
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
                    <a href="https://github.com/DurianStallSingapore/ZILMiner/releases" target={`_blank`}>
                        <Button content='Download ZILMiner' style={styles.button_2} size='big'/>
                    </a>
                </div>
            </div>

            <div style={styles.titleDiv}>
                <Title h1={`SHARDPOOL`} text1={`Ziliqa`} text2={`Mining`} text3={`Shardpool`} color='#fff' fontSize_h1={`124px`} fontSize_h2={`70px`}/>

            </div>

            <Text
                text={`The high performance Ziliqa Maning Shardpool. Payouts are instant and you will
                        receive your as soon as you reach your configured peyment threshold.`}
            />

            <div style={{margin: '60px 0 0 0'}}>
                <Image src={headerImage} size='big'/>
            </div>

        </Header>
    )
}

export default Headers