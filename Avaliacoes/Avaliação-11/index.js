const Aluno = require('./models/Aluno');
const Professor = require('./models/Professor');
const Disciplina = require('./models/Disciplina');

// Exemplo de uso


const exemploAluno = {
  nome: 'Di',
  email: 'Di@example.com'
};

Aluno.obterAluno(5)