import React from 'react';

const styles = {
    text: {
        opacity: 0.8,
        color: "#9ca7be",
        fontFamily: "Nunito",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0.18px"
    },
    textDiv: {
        width: "660px",
        textAlign: 'center'
    }
}

function Text({text}) {
    return (
        <div style={styles.textDiv}>
            <p style={styles.text}>{text}</p>
        </div>
    )
}

export default Text;