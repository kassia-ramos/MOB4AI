import React from 'react';

function CustomTooltip({active, payload, label}){
    if (active && payload && payload.length > 0){
        const dados = payload[0].payload;

    const formatarData = (ts) => {
        const data = new Date(ts);
        const dia = String(data.getDate()).padStart(2,0);
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = String(data.getFullYear()).slice(-2);
        const hora = data.toLocaleTimeString('pt-BR');
        return `${dia}/${mes}/${ano} - ${hora}`;
        };

        return (
            <div style = {{
             backgroundColor: 'white',
             border: '1px solid #ccc',
             padding: '10px',
             borderRadius: '8px',
             fontSize: '14px',
             boxShadow: '0 2px 8px rgba(0,0,0,0.1)'   
            }}>
                <p><strong>Data:</strong> {formatarData(label)}</p>
                <p><strong>Corrente Instantânea(Instant Current):</strong> {dados.inst_curr ?? '---'} mAh</p>
                <p><strong>Capacidade(Capacity):</strong> {dados.battery_level ?? '---'} %</p>
                <p><strong>Temperatura da Bateria(Battery Temperature):</strong> {dados.temp_bat ?? '---'} °C</p>
                <p><strong>Temperatura da CPU(CPU Temperature):</strong> {dados.temp_cpu ?? '---'} °C</p>
            </div>
        );
    }
    return null;
}
export default CustomTooltip;