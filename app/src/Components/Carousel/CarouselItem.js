import React from 'react';
import {Image} from "semantic-ui-react";


function CarouselItem({text, color, icon, title}) {

    const styles = {
            itemBox: {
                width: "420px",
                height: "403px",
                boxShadow: "0 24px 80px rgba(22, 28, 37, 0.16), 0 12px 16px rgba(22, 28, 37, 0.04)",
                borderRadius: "13px",
                border: "2px solid rgba(3, 169, 244, 0.1)",
                backgroundImage: "linear-gradient(45deg, #222836 0%, #313744 100%)",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                transition: "ease 4s"
            },
            itemIcon: {
                width: "96px",
                height: "96px",
                boxShadow: "inset 0 -1px 43px rgba(26, 32, 41, 0.5)",
                borderRadius: "48px",
                border: `3px solid ${color}`,
                backgroundColor: "#2b303e",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            text: {
                color: "#9ca7be",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "18px",
                letterSpacing: "0.35px",
            },
            textDiv: {
                margin: '37px 0 0 0'
            },
            title: {
                color: "#ffffff",
                fontFamily: "Montserrat",
                fontSize: "42px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "0.92px",
                margin: "26px 0 48px 0"
            },
            learn: {
                color: "#9ca7be",
                fontFamily: "Nunito",
                fontSize: "12px",
                fontWeight: 800,
                lineHeight: "49.73px",
            }

        }
    ;

    return (
        <div style={styles.itemBox}>
            <div style={styles.itemIcon}>
                <Image src={icon}/>
            </div>
            <div style={styles.textDiv}>
                <p style={styles.text}>
                    {text}
                </p>
            </div>
            <div style={styles.title}>
                {title}
            </div>
            <div style={styles.learn}>
                <p>LEARN MORE</p>
            </div>
        </div>
    )
}

export default CarouselItem