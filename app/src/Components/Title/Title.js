import React from 'react';


function Title({h1, text1, text2, text3, color, fontSize_h1, fontSize_h2, self}) {
    const styles = {
        h1: {
            opacity: 0.44,
            color: '#293140',
            fontFamily: "Montserrat",
            fontSize: fontSize_h1,
            fontWeight: 800,
            lineHeight: "75.59px"
        },
        h2: {
            color: `${color}`,
            fontFamily: "Montserrat",
            fontSize: fontSize_h2,
            fontWeight: 700,
            position: "relative",
            zIndex: 200,
        },
        text2: {
            color: `${color}`,
            fontFamily: "Montserrat",
            fontSize: fontSize_h2,
            fontWeight: 400,
            position: "relative",
            zIndex: 200,
            margin: "0 10px",
        },
        textDiv: {
            width: "100%",
            height: "100%",
            display: 'flex',
            justifyContent: self,
            alignItems: 'center',
            zIndex: 200,
        },
        flex: {
            display: 'flex',
            justifyContent: self,
            alignItems: 'center'
        }
    };
    return (
        <div className='title'>
            <div style={styles.flex}>
                <h1 className='h1' style={styles.h1}>{h1}</h1>
            </div>
            <div style={styles.textDiv}>
                <span style={styles.h2}>{text1}</span>
                <span style={styles.text2}>{text2}</span>
                <span style={styles.h2}>{text3}</span>
            </div>
        </div>
    )
}

export default Title;