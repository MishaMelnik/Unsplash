import React from 'react';
import {Line} from "react-chartjs-2"
import { Chart as ChartJS} from "chart.js/auto"

const LineChartLikes = () => {


    const day = [
        '2022-1-12', '2022-2-12', '2022-3-12', '2022-4-12', '2022-5-12', '2022-6-12',
        '2022-7-12', '2022-8-12', '2022-9-12', '2022-10-12', '2022-11-12', '2022-12-12',
        '2022-13-12', '2022-14-12', '2022-15-12', '2022-16-12', '2022-17-12', '2022-18-12',
        '2022-19-12', '2022-20-12', '2022-21-12', '2022-22-12', '2022-23-12', '2022-24-12',
        '2022-25-12', '2022-26-12', '2022-27-12', '2022-28-12', '2022-29-12', '2022-30-12',
    ]
    const likes = [
        80,20,24,100,89,0,0,0,23,81,73,13,34,44,220,40,333,29,34,230,120,30,56,0,0,0,0,91,34,10
    ]


    return (
        <div>
            <Line data={{
                labels: day.map((item)=> item),
                datasets:[{
                    label:"likes",
                    data: likes.map((item) => item),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                }]
            }}
            />
        </div>
    );
};

export default LineChartLikes;
