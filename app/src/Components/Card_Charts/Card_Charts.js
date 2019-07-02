import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';


function Card_Charts({
                         title,
                         number,
                         measurementUnit,
                         LineColor,
                         BackColor,
                         color1,
                         color2,
                         dataNumber,
                     }) {

    const [count, setCount] = useState(0);
    console.log(count)
    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 10, 1000, 20);
        gradient.addColorStop(0, `${color1}`);
        gradient.addColorStop(0.5, `${color2}`);
        const gradientLine = ctx.createLinearGradient(0, 10, 1000, 20);
        gradientLine.addColorStop(0, `${LineColor}`);
        gradientLine.addColorStop(0.5, `${BackColor}`);
        return {
            labels: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            datasets: [
                {
                    backgroundColor: gradient,
                    borderColor: gradientLine,
                    pointRadius: 0,
                    borderWidth: 3,
                    data: dataNumber
                }
            ]
        }
    };

    const styles = {
        chartBox: {
            padding: '30px',
            width: '315px',
            height: "516px",
            border: '1px solid #454e5c',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 24px 40px rgba(22, 28, 37, 0.11), 0 12px 32px rgba(22, 28, 37, 0.04)",
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

    return (
        <div
            style={styles.chartBox}
            className='CardItem'
            >
            <div className='chartBox_text'>
                <p style={styles.title}>{title}</p>
                <span style={styles.number}>{number}</span><b style={styles.measurementUnit}>{measurementUnit}</b>
            </div>
            <div className='canvas'
                 onMouseEnter={() => setCount(213)}
                 onMouseLeave={() => setCount(253)}>
                <Line
                    data={data}
                    // width={count}
                    height={300}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        plugins: {
                            labels: false   // disable plugin 'p1' for this instance
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display: false,
                                    color: '#aaa',
                                    borderDash: [1, 3],
                                },
                                display: false,
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawTicks: false,
                                    drawBorder: false,
                                    borderDash: [1, 3],
                                    display: false,
                                },
                                display: false,
                            }]
                        }
                    }}/>
            </div>
        </div>
    )
}

export default Card_Charts