'use strict';

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCEP = async () => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
        const dados     = await fetch(url);
        const address   = await dados.json();

        if(address.hasOwnProperty('erro')) {
            alert("CEP não encontrado.");
        } else {
            preencherFormulario(address);
        }
    }
}

limparFormulario = () => {
    document.getElementById('street').value = '';
    document.getElementById('neighb').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
}

preencherFormulario = (endereco) => {}