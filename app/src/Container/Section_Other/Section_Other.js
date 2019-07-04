import React from 'react';
import {Checkbox} from 'semantic-ui-react'
import Title from "../../Components/Title/Title";
import CheckboxExampleToggle from "../../Components/Button_Switch/Button_Switch";


const styles = {
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    itemFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        color: "#9ca7be",
        fontFamily: "Montserrat",
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: "19.55px",
        letterSpacing: "0.32px",
    },
    text1: {
        color: "#fff",
        fontFamily: "Montserrat",
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: "19.55px",
        letterSpacing: "0.32px",
    }
}


function Section_Other() {

    return (
        <div style={styles.flex}>
            <Title
                h1={`Other`}
                text1={`Other`}
                text2={`Mining`}
                text3={`Shardpools`}
                color={`#fff`}
                fontSize_h1={`120px`}
                fontSize_h2={`64px`}
                self={`flex-Start`}
            />
            <div style={styles.buttonDiv}>
                <div style={styles.itemFlex}>
                    <CheckboxExampleToggle/>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={styles.text1}>Pro</span>
                    &nbsp;
                    <span style={styles.text}>- for experienced miners </span>
                </div>
                <div style={styles.itemFlex} >
                    <span style={styles.text} className='spanHover'>pplns</span>
                    &nbsp;&nbsp;&nbsp;
                    <span style={styles.text} className='spanHover'>solo</span>
                </div>
            </div>


        </div>
    )

}

export default Section_Other;