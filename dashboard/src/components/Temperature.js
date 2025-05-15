import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

import CustomTooltip from './CustomTooltip'

function Temperature({data}) {

    if(data.length === 0){
        return <p>Atualizando o Gráfico da temperatura da bateria..</p>
    }

    const formatTimestamp = (ts) => {
        const date = new Date(ts);
        return `${date.toLocaleDateString('pt-BR')} - ${date.toLocaleTimeString('pt-BR')}`;
    };

    return (
        <div>
            <h3> Gráfico da Temperatura da Bateria </h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis
                    dataKey="timestamp"
                    tickFormatter={formatTimestamp}
                    minTickGap={50}
                    /> 
                    <YAxis
                    label={{value: 'Temperatura (C°)', angle: -90, position: 'insideLeft'}}
                    tickFormatter={(value) => (value/1000).toFixed(1)}
                    domain={[27000,35000]}
                    />

                    <Tooltip content ={<CustomTooltip />} />

                    <Line
                    type= "natural"
                    dataKey="temp_bat"
                    stroke="#00BFFF"
                    dot={false}
                    />

                </LineChart>
            </ResponsiveContainer>

            <h3> Gráfico da Temperatura da CPU</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data= {data}>
                    <XAxis
                    dataKey="timestamp"
                    tickFormatter={formatTimestamp}
                    minTickGap={50}
                    />
                    
                    <YAxis 
                    label={{value: 'Temperatura (C°)', angle: -90, position: 'insideLeft'}}
                    tickFormatter={(value) => (value/1000).toFixed(1)}
                    />

                    <Tooltip content ={<CustomTooltip />} />

                    <Line 
                    type = "monotone"
                    dataKey="temp_cpu"
                    stroke="#00BFFF"
                    dot={false}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    )
}

export default Temperature