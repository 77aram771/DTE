import React from 'react';
import Chart from "./Charts/Charts";

const styles = {
    chartBox: {
        padding: '30px',
        width: "350px",
        height: "516px",
        border: '1px solid #454e5c',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 24px 40px rgba(22, 28, 37, 0.11), 0 12px 32px rgba(22, 28, 37, 0.04)",
        backgroundColor: "#212734",
    },
    title: {
        margin: '0 0 25px 0',
        opacity: 0.88,
        color: "#9ca7be",
        fontFamily: 'Montserrat',
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: "21.41px",
        letterSpacing: "0.6px",
    },
    number: {
        margin: '0 18px 0 0',
        color: '#ffffff',
        fontFamily: "Montserrat",
        fontSize: "56px",
        fontWeight: 400,
        lineHeight: "19.76px",
        letterSpacing: "-0.68px",
    },
    measurementUnit: {
        color: "#9ca7be",
        fontFamily: "Montserrat",
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: "19.76px",
        letterSpacing: "0.59px",
    }
};

function Card_Charts({title, number, measurementUnit, LineColor, BackColor, color1, color2}) {
    console.log('color', color1);
    console.log('backgroun', BackColor);
    return (
        <div style={styles.chartBox}>
            <div>
                <p style={styles.title}>{title}</p>
                <span style={styles.number}>{number}</span><b style={styles.measurementUnit}>{measurementUnit}</b>
            </div>
            <Chart
                LineColor={LineColor}
                BackColor={BackColor}
                color1={color1}
                color2={color2}
            />
        </div>
    )
}

export default Card_Charts