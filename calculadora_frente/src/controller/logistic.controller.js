const { consultaCep, calculadoraFretePrazo, calculadoraPrazo } = require('../service/correios.service')

// controllers tratam o recebimento e a reposta das requisiçoes

const calculaFrete = async (req, res) => {
    try {
        let cep = req.params.cep;
        if (cep) {
            let detalheFrete = await calculadoraFretePrazo(cep);
            detalheFrete ? res.status(200).json(detalheFrete) : res.status(404).json({ err: 'cep nao encontrado' });
        } else {
            res.status(400).json({ err: 'erro na requisiçao' })
        }
    }
    catch (e) {
        res.status(400).json({ Erro: e });
    }
}

const calculaPrazo = async (req, res) => {
    try {
        let cep = req.params.cep;
        if (cep) {
            let detalheFrete = await calculadoraPrazo(cep);
            detalheFrete ? res.status(200).json(detalheFrete) : res.status(404).json({ err: 'cep nao encontrado' });
        } else {
            res.status(400).json({ err: 'erro na requisiçao' })
        }
    }
    catch (e) {
        res.status(400).json({ Erro: e });
    }
}

const cepInfo = async (req, res) => {
    try {
        let cep = req.params.cep
        if (cep) {
            let endereco = await consultaCep(req.params.cep);
            endereco ? res.status(200).json(endereco) : res.status(404).json({ err: 'cep nao encontrado' });
        } else {
            res.status(400).json({ err: 'erro na requisiçao' })
        }
    } catch (e) {
        res.status(400).json({ err: 'erro na requisiçao ' + e })
    }
}

module.exports = {
    calculaFrete,
    cepInfo,
    calculaPrazo
}