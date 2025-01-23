const wrap = require('word-wrap');

// Função para obter a configuração (exemplo com limite de caracteres)
const getConfiguration = async () => {
  return {
    maxCommitLineWidth: 100, // Máximo de caracteres por linha
    headerFormat: '{type}({scope}): {subject}', // Formato do cabeçalho
  };
};

// Função para formatar o cabeçalho do commit
const formatHeader = (headerFormat, type, scope, ticketId, subject) => {
  return headerFormat
    .replace('{type}', type) // Tipo da tarefa (feat ou fix)
    .replace('{scope}', scope) // Módulo
    .replace('{subject}', subject) // Breve descrição
    .replace('{ticket_id}', ticketId); // Número da tarefa
};

// Função que cria o questionário para o commit
const prompter = async (cz, commit) => {
  const configuration = await getConfiguration();
  const wrapOptions = {
    indent: '',
    trim: true,
    width: configuration.maxCommitLineWidth,
  };

  // Perguntas personalizadas
  const questions = [
    {
      type: 'list',
      name: 'type',
      message: 'Selecione o tipo de mudança que você está fazendo:',
      choices: [
        { name: 'Funcionalidade (feat)', value: 'feat' },
        { name: 'Correção (fix)', value: 'fix' },
      ],
    },
    {
      type: 'list',
      name: 'scope',
      message: 'Qual é o módulo dessa mudança?',
      choices: [
        { name: 'Solicitações', value: 'solicitacoes' },
        { name: 'Tela Aprovações', value: 'tela_aprovacoes' },
      ],
    },
    {
      type: 'input',
      name: 'ticket_id',
      message: 'Qual o número da tarefa e time? (ex: PTF-1234)',
      validate: (input) => /^([A-Za-z]+-\d+)$/.test(input) || 'O formato da tarefa está incorreto. Exemplo: PTF-1234.',
    },
    {
      type: 'input',
      name: 'subject',
      message: 'Escreva uma descrição curta referente a tarefa: ',
      validate: (input) => input.length > 0 || 'A descrição não pode estar vazia.',
    },
  ];

  // Coleta as respostas do usuário
  const answers = await cz.prompt(questions);

  // Formatação do commit
  const commitMessage = [
    formatHeader(
      configuration.headerFormat,
      answers.type,
      answers.scope,
      answers.ticket_id,
      answers.subject,
    ),
    answers.ticket_id, 
  ]
    .filter(Boolean)
    .join('\n\n')
    .trim();

  commit(commitMessage);
};

module.exports = { prompter };
