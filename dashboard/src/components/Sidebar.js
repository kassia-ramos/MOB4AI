import React from "react";

const formatarPlugType = (code) => {
    const tipos = ['Unplugged', 'AC', 'USB', 'Wireless'];
    return tipos[code] ?? 'Desconhecido';
};

const formatarStatus = (code) => {
    const statuss = ['Unknown', 'Charging', 'Discharging', 'Not Charging', 'Full', 'Wireless' ];
    return statuss[code - 1] ?? 'Desconhecido' 
};

function Sidebar({dado}) {
    console.log("dado recebido na barra", dado);

    if(!dado){
        return (
            <div style = {{padding: '1rem', borderLeft: '1px solid #ddd', width: '250px'}}>
                <p> Selecione o gráfico para visualizar</p>
            </div>
        );
    }

    //processo de conversao de dados
    const plug =formatarPlugType(dado.plug_type);
    const status= formatarStatus(dado.battery_status);
    const voltage = dado.voltage;
    const instCurr = dado.inst_curr;
    const tempBat = dado.temp_bat ? (dado.temp_bat / 1000).toFixed(1): '---';

    return (
        <div style= {{
            padding: '1rem', 
            borderRight: '1px solid #ddd', 
            width: '250px',
            minWidth: '250px',
            backgroundColor: '#f9f9f9',
            fontSize: '14px',
            lineHeight: '1.4',
            }}>
            <h4>Informações Adicionais</h4>
            <p><strong>Plug Type/ Status:</strong> {plug} {status}</p>
            <p><strong>Voltage:</strong> {voltage} mV</p>
            <p><strong>Instant Current:</strong> {instCurr} mAh</p>
            <p><strong>Temperature Bat:</strong> {tempBat} °C</p>
        </div>
    );
}

export default Sidebar