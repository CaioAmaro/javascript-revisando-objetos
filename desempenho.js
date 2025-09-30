/* Você está finalizando o back-end de uma plataforma de cursos online. 
Cada curso possui uma lista de estudantes com seus respectivos dados 
de progresso. Sua tarefa é construir um relatório que mostre o desempenho geral da turma.

Você deve escrever um programa que:

    Crie um objeto chamado curso, com as seguintes propriedades:
        titulo: string com o nome do curso;
        estudantes: um array de objetos, cada um com nome e progresso (número de 0 a 100);
        Um método interno chamado gerarRelatorio.

    O método gerarRelatorio deve:
        Percorrer o array de estudantes;
        Exibir no console o nome de cada estudante e sua situação:
            Se o progresso for igual ou maior que 70, mostrar "Aprovado";
            Senão, mostrar "Em andamento";
        Ao final, mostrar:
            A quantidade total de estudantes;
            A média geral de progresso da turma.

Exemplo de entrada:
const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],
};

curso.gerarRelatorio();

Saída esperada:
Estudante: João | Progresso: 85% | Situação: Aprovado
Estudante: Ana | Progresso: 40% | Situação: Em andamento
Estudante: Juliano | Progresso: 72% | Situação: Aprovado
Estudante: Patrícia | Progresso: 60% | Situação: Em andamento

Total de estudantes: 4
Média geral da turma: 64.25%
 */


// -------------------------------------------

/* Crie um objeto chamado curso, com as seguintes propriedades:
        titulo: string com o nome do curso;
        estudantes: um array de objetos, cada um com nome e progresso (número de 0 a 100);
        Um método interno chamado gerarRelatorio. */

const curso = {
    titulo: 'JavaScript Intermediário',
    estudantes: [
        { nome: "Ana", progresso: 85 },
        { nome: "Carlos", progresso: 40 },
        { nome: "Juliana", progresso: 72 },
        { nome: "Pedro", progresso: 60 }
    ],
    gerarRelatorio: function(){
        let somaTotalProgresso = 0

        for({nome, progresso} of this.estudantes){
            somaTotalProgresso += progresso

            if(progresso >= 70){
                console.log('Estudante: ',nome,' | Progresso: ', progresso,'% | Situacao: Aprovado')
            }else{
                console.log('Estudante: ',nome,' | Progresso: ', progresso,'% | Situacao: Em Andamento')
            }
        }

        const mediaProgresso = somaTotalProgresso / this.estudantes.length

        console.log()
        console.log('Total de estudantes: ', this.estudantes.length)
        console.log('Média geral da Turma: ',mediaProgresso,'%')
    }
}

curso.gerarRelatorio()


/* O método gerarRelatorio deve:
        Percorrer o array de estudantes;
        Exibir no console o nome de cada estudante e sua situação:
            Se o progresso for igual ou maior que 70, mostrar "Aprovado";
            Senão, mostrar "Em andamento";
        Ao final, mostrar:
            A quantidade total de estudantes;
            A média geral de progresso da turma. */