/* Você está desenvolvendo um sistema de manutenção preventiva para uma indústria. 
Cada máquina registra os meses em que passou por manutenção ao longo do ano, 
armazenando a quantidade de dias parados em um objeto, onde cada chave 
representa um mês e o valor representa os dias de inatividade.

Agora, o sistema precisa gerar um relatório que exiba:
    O total de dias parados no ano.
    A quantidade de meses com manutenção (ou seja, com valor maior que zero).
    Um alerta caso o total de dias parados seja maior que 20 dias: 
    Status: Atenção! Acima do limite anual. ou Status: Dentro do limite anual.

Exemplo de entrada:
const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

Saída esperada:
Total de dias parados: 18  
Meses com manutenção registrada: 4  
Status: Dentro do limite anual
 */

const manutencao = {
    jan: 2,
    fev: 0,
    mar: 5,
    abr: 4,
    mai: 3,
    jun: 7
}

function totalizarDiasParados(manutencao){
    let somaDiasParados = 0
    const relatorioDeDiasPelosMeses = Object.values(manutencao)
    for(relatorioMensal of relatorioDeDiasPelosMeses){
        somaDiasParados += relatorioMensal;
    }

    return somaDiasParados
}

function totalizarMesesComManutencao(manutencao){
    let mesesComManutencao = 0
    const relatorioDeDiasPelosMeses = Object.values(manutencao)
    for(relatorioMensal of relatorioDeDiasPelosMeses){
        if(relatorioMensal > 0){
            mesesComManutencao++
        }
    }

    return mesesComManutencao
}

function criarStatusLimiteManutencaoPorAno(diasParados){
    if(diasParados > 20){
        return 'Atenção! Acima do limite anual.'
    }else{
        return 'Dentro do limite anual.'
    }
}

function exibirRelatorio(diasParados, mesesComManutencao, statusLimiteManutencaoAnual){
    /* Total de dias parados: 18  
    Meses com manutenção registrada: 4  
    Status: Dentro do limite anual */
    console.log('Total de dias parados: ', diasParados)
    console.log('Meses com manutenção registrada: ', mesesComManutencao)
    console.log('Status: ', statusLimiteManutencaoAnual)
}

function iniciarRelatorio(manutencao){
    const diasParados = totalizarDiasParados(manutencao)
    const mesesComManutencao = totalizarMesesComManutencao(manutencao)
    const statusLimiteManutencaoAnual = criarStatusLimiteManutencaoPorAno(diasParados)

    exibirRelatorio(diasParados, mesesComManutencao, statusLimiteManutencaoAnual)
}

iniciarRelatorio(manutencao)


