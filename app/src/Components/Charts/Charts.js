import React from 'react';
import {Line} from 'react-chartjs-2';

function Chart({color1, color2}) {
    console.log(color1)
    console.log(color2)
    const colorOne = color1;
    const colorTwo = color2;
    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 10, 1000, 20);
        gradient.addColorStop(0, `'${colorOne}'`);
        gradient.addColorStop(1, `'${colorTwo}'`);
        return {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    backgroundColor: gradient,
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 3,
                    hoverBackgroundColor: 'rgba(255,99,132,0.1)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 60, 64, 65]
                }
            ]
        }
    };
    return (
        <div>
            <Line
                data={data}
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
    );
}

export default Chart;