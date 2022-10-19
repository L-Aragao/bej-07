const axios = require('axios')
const parser = require('xml2json')
const bodyRequest = require('../interface/request.frete')
const qs = require('qs'); // modulo core para transforma objetos em strings

/**  
 * Documentaçao das API dos correios
 * http://ws.correios.com.br/calculador/calcprecoprazo.asmx
 * 
 * caso nada der certo ainda podemos usar o node modulo para os correios
 * https://www.npmjs.com/package/node-correios 
 * npm install node-correios --save
*/

/**
 * Analisando a documentaçao, podemos consumir as APIs dos correios com http,
 * Logo podemos utilizar o axios!
*/ 
const calculadoraPrazo = async (cep) => {
    const urlRequest = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrazo';
    const data = qs.stringify({ 'nCdServico': '40010', 'sCepOrigem': '13206765', 'sCepDestino': cep });
    const customConfig = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    let result = await axios.post(urlRequest, data, customConfig);
    return await parseResponse(result);
}

const calculadoraFretePrazo = async (cep) => {
    const urlRequest = 'http://ws.correios.com.br//calculador/calcprecoprazo.asmx/CalcPrecoPrazo';
    const data = qs.stringify(bodyRequest(cep));
    const customConfig = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    let result = await axios.post(urlRequest, data, customConfig);
    return await parseResponse(result);
}

const consultaCep = async (cep) => {
    let urlRequest = `https://viacep.com.br/ws/${cep}/json/`;
    let endereco = await axios.get(urlRequest);
    return endereco.data ? endereco.data : null;
}

const parseResponse = async (response) => {
    let jsonResult = await JSON.parse(parser.toJson(response.data));
    if(jsonResult.cResultado.Servicos.cServico) return jsonResult.cResultado.Servicos.cServico;
    else return null;
} 

module.exports = { calculadoraFretePrazo, consultaCep, calculadoraPrazo };
