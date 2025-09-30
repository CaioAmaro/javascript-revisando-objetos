/* Você está desenvolvendo um sistema para uma locadora de carros. 
Cada veículo tem informações cadastradas, mas agora a empresa 
decidiu remover a informação do modelo antigo dos carros. Escreva um programa que:

    Crie um objeto carro com as propriedades: marca, modelo, ano, modeloAntigo;
    Remova a propriedade modeloAntigo;
    Exiba o objeto final no console.

Exemplo de entrada:
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  modeloAntigo: 'Corolla XEi'
};

Saída esperada:
{ marca: 'Toyota', modelo: 'Corolla', ano: 2022 } */
 
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    modeloAntigo: 'Corolla XEi'
}

console.log('Antes: ', carro)

delete carro.modeloAntigo

console.log('Depois: ', carro)