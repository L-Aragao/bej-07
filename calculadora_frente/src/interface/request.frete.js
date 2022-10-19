
const CEPLOJA = '13206765';
const emptyString = '';

const bodyRequest = (cepDestino, cdServico = '40010') => {
    return {
        'nCdEmpresa': emptyString,
        'sDsSenha': emptyString,
        'nCdServico': cdServico,
        'sCepOrigem': CEPLOJA,
        'sCepDestino': cepDestino,
        'nVlPeso': "1",
        'nCdFormato': 1,
        'nVlComprimento': 20,
        'nVlAltura': 20,
        'nVlLargura': 20,
        'nVlDiametro': 0,
        'sCdMaoPropria': "N",
        'nVlValorDeclarado': 0,
        'sCdAvisoRecebimento': "N",
    }
}

module.exports = bodyRequest;

/**
 *  Dados da empresa, se tiver contrato com os Correios:
 *  nCdEmpresa
 *  sDsSenha
 * 
 *  Código do tipo de frete - por padrão deixei o SEDEX
 *  nCdServico
 * 
 * Cep de origem e destino - apenas números
 * sCepOrigem
 * sCepDestino
 * 
 * Peso total da encomenda - por padrão deixei 1kg
 * nVlPeso
 * 
 * Formato da encomenda - por padrão deixei 1
 * nCdFormato
 * 
 * Para encomenda do tipo PAC, deve-se preencher a dimensão da embalagem
 * nVlComprimento
 * nVlAltura
 * nVlLargura
 * nVlDiametro
 * 
 * Informa se é por mão própria - por padrão deixei Não
 * sCdMaoPropria
 * 
 * Valor declarado - por padrão não informo
 * nVlValorDeclarado
 * 
 * Se desejo recebr aviso de recebimento - por padrão não quero
 * sCdAvisoRecebimento
 */

/**
 * Código  Serviço:
    41106  PAC sem contrato
    40010  SEDEX sem contrato
    40045  SEDEX a Cobrar, sem contrato
    40215  SEDEX 10, sem contrato
    40290  SEDEX Hoje, sem contrato
    40096  SEDEX com contrato
    40436  SEDEX com contrato
    40444  SEDEX com contrato
    81019  e-SEDEX, com contrato
    41068  PAC com contrato
 */