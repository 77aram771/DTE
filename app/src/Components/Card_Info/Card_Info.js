import React from 'react';

function Card_Info({
                       title,
                       text1,
                       text2,
                       title2,
                       text3,
                       text4,
                       borderTopNumber,
                       borderBottomNumber,
                       borderLeftNumber,
                       borderRightNumber,
                   }) {
    const styles = {
        chartBox: {
            width: "315px",
            height: "516px",
            borderTop: `${borderTopNumber} solid rgba(255, 255, 255, 0.2)`,
            borderBottom: `${borderBottomNumber} solid rgba(255, 255, 255, 0.2)`,
            borderRight: `${borderLeftNumber} solid rgba(255, 255, 255, 0.2)`,
            borderLeft: `${borderRightNumber} solid rgba(255, 255, 255, 0.2)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
        },
        textDiv: {
            padding: "0 0 0 30px",
            width: '100%',
            height: '140px',
            borderBottom: '1px solid #454e5c',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            flexDirection: 'column'
        },
        title1: {
            color: "#ffffff",
            fontFamily: "Montserrat",
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "19.76px",
            letterSpacing: "1.06px",
        },
        text1: {
            color: "#ffffff",
            fontFamily: "Montserrat",
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: "16.47px",
            letterSpacing: "0.32px",
        },
        text2: {
            color: "#9ca7be",
            fontFamily: "Montserrat",
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: "16.47px",
            letterSpacing: "0.32px",
        }
    };
    return (
        <div style={styles.chartBox}>
            <div style={styles.textDiv}>
                <div>
                    <p style={styles.title1}>{title}</p>
                </div>
                <div>
                    <b style={styles.text1}>{text1}</b><span style={styles.text2}>{text2}</span>
                </div>
            </div>
            <div style={styles.textDiv}>
                <div>
                    <p style={styles.title1}>{title2}</p>
                </div>
                <div>
                    <b style={styles.text1}>{text3}</b><span style={styles.text2}>{text4}</span>
                </div>
            </div>
        </div>
    )
}

export default Card_Info