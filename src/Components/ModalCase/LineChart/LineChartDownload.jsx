import React from 'react';
import {Line} from "react-chartjs-2"
import { Chart as ChartJS} from "chart.js/auto"

const LineChartDownload = () => {


    const days = [
        '2022-1-12', '2022-2-12', '2022-3-12', '2022-4-12', '2022-5-12', '2022-6-12',
        '2022-7-12', '2022-8-12', '2022-9-12', '2022-10-12', '2022-11-12', '2022-12-12',
        '2022-13-12', '2022-14-12', '2022-15-12', '2022-16-12', '2022-17-12', '2022-18-12',
        '2022-19-12', '2022-20-12', '2022-21-12', '2022-22-12', '2022-23-12', '2022-24-12',
        '2022-25-12', '2022-26-12', '2022-27-12', '2022-28-12', '2022-29-12', '2022-30-12',
    ]
    const download = [
        1,20,3,13,10,11,14,5,40,20,17,1,34,6,8,9,40,20,3,20,10,20,56,34,23,12,14,9,7,10
    ]


    return (
        <div>
            <Line data={{
                labels: days.map((item)=> item),
                datasets:[{
                    label:"downloads",
                    data: download.map((item) => item),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }}/>
        </div>
    );
};

export default LineChartDownload;
