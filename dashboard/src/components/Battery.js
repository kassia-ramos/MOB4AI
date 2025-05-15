import { useEffect } from 'react';
import axios from 'axios';
import React, {useState} from 'react';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

function Battery() {
    const [batteryData, setBatteryData]= useState([]);

    useEffect(() =>{
        axios.get('/battery')
        .then(response =>{
            console.log('Dados da  API', response.data);
            setBatteryData(response.data);
        })
        .catch(error => {
            console.error('erro', error);
        });
    }, []); //vetor vazio para rodar só uma vez

    //formatação
    const formatTimestamp = (ts) => {
        return new Date(ts).toLocaleString();
    };

    //const latestData = batteryData.length > 0 ? batteryData[0]: null;

    return (
        <div>
            <h3>Corrente Instantânea da Bateria</h3>

            {batteryData.length === 0 && <p>Atualizando gráfico</p>}

            {batteryData.length > 0 && (
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={batteryData}>
                        <XAxis
                        dataKey="timestamp"
                        tickFormatter={formatTimestamp}
                        minTickGap={50}
                        />

                        <YAxis
                        label={{value: 'Corrente (mAh)', angle: -90, position: 'insideleft'}}
                        />

                        <Tooltip
                        labelFormatter={(label) => `Hora: ${formatTimestamp(label)}`}
                        formatter={(value) => [`${value} mAh`, 'Corrente']}
                        />

                        <Line
                        type="monotone"
                        dataKey="inst_curr"
                        stroke='#8884d8'
                        dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            )}

        </div>
    );
}

export default Battery