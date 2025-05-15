//import { useEffect } from 'react';
//import axios from 'axios';
import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from 'recharts'

import CustomTooltip from './CustomTooltip'

//recebe da base unificada
function Battery({data}) {

    if(data.length === 0){
        return <p>Atualizando o Gráfico da Corrente..</p>
    }
    console.log('exemplo de linha de dadoos:', data[0]);

    //formatação
    const formatTimestamp = (ts) => {
        const date = new Date(ts);
        return `${date.toLocaleDateString('pt-BR')} - ${date.toLocaleTimeString('pt-BR')}`;
    };

    //const latestData = batteryData.length > 0 ? batteryData[0]: null;

    return (
        <div>
            <h3>Corrente Instantânea da Bateria</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis
                    dataKey="timestamp"
                    tickFormatter={formatTimestamp}
                    minTickGap={50}
                    />

                    <YAxis
                    label={{value: 'Corrente (mAh)', angle: -90, position: 'insideLeft'}}
                    />

                    <Tooltip content={<CustomTooltip/>} />

                    <Line
                    type="monotone"
                    dataKey="inst_curr"
                    stroke='#82ca9d'
                    dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>

            <h3> Nível da Bateria</h3>
            <ResponsiveContainer width = '100%' height={300}>
                <AreaChart data= {data}>
                    <XAxis
                    dataKey="timestamp"
                    tickFormatter={formatTimestamp}
                    minTickGap={50}
                    />
                    <YAxis
                    domain={[0,100]}
                    label={{value: 'Bateria(%)', angle: -90, position: 'insideLeft'}}
                    />

                    <Tooltip content ={<CustomTooltip />} />

                    <Area 
                    type="monotone"
                    dataKey="battery_level"
                    stroke='#8884d8'
                    fill='#8884d8'
                    />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    );
}

export default Battery