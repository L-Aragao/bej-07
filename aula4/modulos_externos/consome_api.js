

const axios = require('axios');

const fatosDeGato = 'https://catfact.ninja/fact';
// axios.get(fatosDeGato).then(resultado => console.log(resultado.data));

const localHost1 = 'http://localhost:8080/?year=2023&month=Dez';
const localHost2 = 'http://localhost:8080/bomdia';
// axios.get(localHost).then(resultado => console.log(resultado.data));


// function teste(){
//     const req1 = axios.get(localHost1);
//     const req2 =axios.get(fatosDeGato);
//     const req3 =axios.get(localHost2);

//     Promise.all([req1, req2, req3])
//         .then(
//             resultado =>{
//                 console.log(resultado[0].data);
//                 console.log(resultado[1].data);
//                 console.log(resultado[2].data);
//             }
//         )
// }
// teste();



// nao esquecer de encerrar escopos anterios a essa declaracao com ;
//IIEF
(() => {
    const req1 = axios.get(localHost1);
    const req2 =axios.get(fatosDeGato);
    const req3 =axios.get(localHost2);

    Promise.all([req1, req2, req3])
        .then(
            resultado =>{
                console.log(resultado[0].data);
                console.log(resultado[1].data);
                console.log(resultado[2].data);
            }
        )
})()