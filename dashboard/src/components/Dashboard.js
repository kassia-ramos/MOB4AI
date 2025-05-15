import { useEffect, useState } from "react";
import axios from "axios";
import Battery from "./Battery";
import Temperature from "./Temperature"

function Dashboard(){

    const [dadosUnificados, setunifdados] = useState([]);

    useEffect(() => {
        Promise.all([
            axios.get('/battery'),
            axios.get('/temperature')
        ])
        .then (([batteryResponse, temperatureResponse])=> {
            const batteryData = batteryResponse.data;
            const temperatureData = temperatureResponse.data;

            const dadosMesclados = batteryData.map(batteryItem => {
                const temperaturaCorrespondente = temperatureData.find(tempItem =>
                    Math.abs(tempItem.timestamp - batteryItem.timestamp) < 1000
                );
                return {
                    ...batteryItem,
                    ...temperaturaCorrespondente
                };
            });
            setunifdados(dadosMesclados);
        })
        .catch(error =>{
            console.error('erro ao juntar os dados:', error);
        });
    }, []);


    return ( 
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem'}}>
            <h2>Dashboard</h2>
            <Battery data={dadosUnificados} />
            <Temperature data={dadosUnificados} />
        
        </div>
    );
}

export default Dashboard