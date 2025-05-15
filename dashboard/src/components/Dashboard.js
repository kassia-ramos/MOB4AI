import { useEffect, useState } from "react";
import axios from "axios";
import Battery from "./Battery";
import Temperature from "./Temperature"
import Sidebar from "./Sidebar";

function Dashboard(){

    const [dadosUnificados, setunifdados] = useState([]);
    const[dadoSelecionado, setDadoSelecionado] = useState(null);

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
                    Math.abs(tempItem.timestamp - batteryItem.timestamp) < 10000    //os dados são unidos com até 10s de diferença entre timestamps
                );
                return {
                    ...batteryItem,
                    temp_bat: temperaturaCorrespondente?.temp_bat ?? null,
                    temp_cpu: temperaturaCorrespondente?.temp_cpu ?? null,
                    temp_front: temperaturaCorrespondente?.temp_front ?? null,
                    temp_back: temperaturaCorrespondente?.temp_back ?? null,
                };
            });

            setunifdados(dadosMesclados);
        })
        .catch(error =>{
            console.error('erro ao juntar os dados:', error);
        });
    }, []);


    return ( 
        
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'Inter, sans-serif'}}>
            <Sidebar dado={dadoSelecionado} />
            <div style={{ flex: 1, padding: '2rem'}}>
                <h2 style={{marginBottom: '1.5rem'}}>Dashboard</h2>
                <div 
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2rem',
                        width: '100%',
                    }}
                >
                    <Battery data={dadosUnificados} onHover={setDadoSelecionado} />
                    <Temperature data={dadosUnificados} onHover={setDadoSelecionado}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard