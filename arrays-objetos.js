/* Você está desenvolvendo um painel de monitoramento que 
exibe informações sobre dispositivos conectados à rede. 
Cada dispositivo é representado por um objeto, e todos 
estão organizados dentro de um array.

Escreva um programa que:

    Crie um array chamado dispositivos, contendo 3 objetos com as propriedades: nome e status.
    Use um loop para exibir no console o nome e status de cada dispositivo.

Exemplo de entrada:
const dispositivos = [
   // preencha com as propriedades necessárias
];

Saída esperada:
Dispositivo: Impressora | Status: ativo  
Dispositivo: Scanner | Status: inativo  
Dispositivo: Projetor | Status: ativo
 */

const dispositivos = [
    {nome: 'Impressora', status: 'ativo'},
    {nome: 'Scanner', status: 'inativo'},
    {nome: 'Projetor', status: 'ativo'}
]

for(dispositivo of dispositivos){
    console.log(dispositivo)
}