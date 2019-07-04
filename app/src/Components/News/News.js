import React from 'react';


function News({
                  borderTopNumber,
                  borderBottomNumber,
                  borderLeftNumber,
                  borderRightNumber,
                  imageLetter,
                  title,
                  text,
                  backgroundColor,
                  relative,
                  className1,
                  className2
              }
) {

    const styles = {
        NewsBox: {
            width: "375px",
            height: "320px",
            borderRight: `${borderLeftNumber} solid rgba(255, 255, 255, 0.2)`,
            borderLeft: `${borderRightNumber} solid rgba(255, 255, 255, 0.2)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: relative,
            padding: '40px 0 40px 0',
        },
        NewsBoxDiv: {
            borderTop: `${borderTopNumber} solid rgba(255, 255, 255, 0.2)`,
            borderBottom: `${borderBottomNumber} solid rgba(255, 255, 255, 0.2)`,
            padding: '32px 60px  42px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            height: '100%',
            position: relative,
        },
        NewsBoxImageColor: {
            width: `52px`,
            height: `52px`,
            borderRadius: `26px`,
            backgroundColor: backgroundColor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        NewsBoxImageColorLetter: {
            color: '#fff',
            fontFamily: "Montserrat",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "18.91px",
            letterSpacing: "-0.41px",
        },
        NewsBoxTitle: {
            color: "#ffffff",
            fontFamily: "Montserrat",
            fontSize: "15px",
            fontWeight: 700,
            lineHeight: "19.76px",
            letterSpacing: "0.45px"
        },
        NewsBoxText: {
            color: "#9ca7be",
            fontFamily: "Montserrat",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "19.76px",
            letterSpacing: "0.39px",
            opacity: 0.6
        }

    };

    return (
        <div style={styles.NewsBox} className={className1}>
            <div style={styles.NewsBoxDiv} className={className2}>
                <div style={styles.NewsBoxImageColor}>
                    <p style={styles.NewsBoxImageColorLetter}>{imageLetter}</p>
                </div>
                <div>
                    <p style={styles.NewsBoxTitle}>{title}</p>
                </div>
                <div>
                    <p style={styles.NewsBoxText}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default News;